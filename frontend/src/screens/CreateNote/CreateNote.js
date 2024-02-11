import { useState } from "react";
import { Button, Card, Form, Badge } from "react-bootstrap";
import MainScreen from "../../components/MainScreen";
import ReactMarkdown from "react-markdown";
import { useDispatch, useSelector } from "react-redux";
import { createNoteAction } from "../../actions/notesActions";
import { useNavigate } from "react-router-dom";
import ErrorMessage from "../../components/ErrorMessage";
import Loading from "../../components/Loading";

const CreateNote = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("");

  const dispatch = useDispatch();
  const noteCrate = useSelector((state) => state.noteCrate);
  const { loading, error, note } = noteCrate;

  const navigate = useNavigate();

  const resetHandler = () => {
    setTitle("");
    setContent("");
    setCategory("");
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (!title || !content || !category) return;
    dispatch(createNoteAction(title, content, category));

    resetHandler();
    navigate("/mynotes");
  };
  const wordCount = () => {
    return content.trim().split(/\s+/).filter(Boolean).length;
  };

  return (
    <div>
      <MainScreen title="Create a Note">
        <Card>
          <Form onSubmit={submitHandler}>
            {error && <ErrorMessage variant="danger">{error}</ErrorMessage>}
            <Form.Group controlId="title">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="title"
                value={title}
                placeholder="Enter a title"
                onChange={(e) => setTitle(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="content">
              <Form.Label>Content</Form.Label>
              <Form.Control
                as="textarea"
                value={content}
                placeholder="Enter the content"
                rows={4}
                onChange={(e) => setContent(e.target.value)}
              />
            </Form.Group>

            {content && (
              <Card>
                <Card.Header>Note Preview</Card.Header>
                <Card.Body>
                  <ReactMarkdown>{content}</ReactMarkdown>
                </Card.Body>
              </Card>
            )}

            <Form.Group controlId="content">
              <Form.Label>Category</Form.Label>
              <Form.Control
                type="content"
                value={category}
                placeholder="Enter the category"
                onChange={(e) => setCategory(e.target.value)}
              />
            </Form.Group>
            <div className="d-flex justify-content-between align-items-center">
            <Badge variant="secondary">Words: {wordCount()}</Badge>
            <div>
              {loading && <Loading size={20} />}
              <Button type="submit" variant="primary" className="mx-2">
                Create Note
              </Button>
              <Button variant="danger" onClick={resetHandler}>
                Reset Fields
              </Button>
            </div>
          </div>
        </Form>
          <Card.Footer className="text-muted">
            Creating on - {new Date().toLocaleDateString()}
          </Card.Footer>
        </Card>
      </MainScreen>
    </div>
  );
};
export default CreateNote;
