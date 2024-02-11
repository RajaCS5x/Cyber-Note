import React, { useEffect } from "react";
import { Accordion, Badge, Button, Card } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import MainScreen from "../../components/MainScreen";
import { useDispatch, useSelector } from "react-redux";
import { deleteNoteAction, listNotes } from "../../actions/notesActions";
import Loading from "../../components/Loading";
import ErrorMessage from "../../components/ErrorMessage";
import { ToastContainer, toast } from "react-toastify"; // Import ToastContainer and toast
import "react-toastify/dist/ReactToastify.css"; // Import the CSS for react-toastify
import "./MyNotes.css"; // Import your CSS file

const MyNotes = ({ search }) => {
  const dispatch = useDispatch();
  const noteList = useSelector((state) => state.noteList);
  const { loading, error, notes } = noteList;

  const navigate = useNavigate();
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const noteCrate = useSelector((state) => state.noteCrate);
  const { success: successCreate } = noteCrate;

  const noteUpdate = useSelector((state) => state.noteUpdate);
  const { success: successUpdate } = noteUpdate;

  const noteDelete = useSelector((state) => state.noteDelete);
  const {
    loading: loadingDelete,
    error: errorDelete,
    success: successDelete,
  } = noteDelete;

  const deleteHandler = (id) => {
    toast.success("Note deleted successfully"); // Show success message
    dispatch(deleteNoteAction(id));
  };

  useEffect(() => {
    if (!userInfo) {
      navigate("/");
    }
    dispatch(listNotes());
  }, [
    dispatch,
    successCreate,
    navigate,
    userInfo,
    successUpdate,
    successDelete,
  ]); 

  return (
    <div>
      <MainScreen title={`Welcome ${userInfo?.name?.split(" ")[0]}...`}>
        <Link to="/createnote">
        <Button style={{ marginLeft: 10, marginBottom: 20 }} size="lg">
      Create a Note
    </Button>
        </Link>
        <ToastContainer /> {/* Add ToastContainer */}
        {errorDelete && (
          <ErrorMessage variant="danger">{errorDelete}</ErrorMessage>
        )}
        {error && <ErrorMessage variant="danger">{error}</ErrorMessage>}
        {loading && <Loading />}
        <div className="notes-container">
        {notes
          ?.reverse()
          .filter((filteredNote) =>
            filteredNote.title.toLowerCase().includes(search.toLowerCase())
          )
          .map((note) => (
            <Accordion key={note._id} defaultActiveKey="0">
              <Card className="note-card">
                <Card.Header className="card-header">
                  <span className="card-title">{note.title}</span>
                  <div className="card-info">
                    <span className="category">
                      <Badge pill bg="info">{note.category}</Badge>
                    </span>
                    <span className="created-date">
                      Created On: {note.createdAt.substring(0, 10)}
                    </span>
                  </div>
                  <div className="card-buttons">
                    <Link to={`/note/${note._id}`}>
                      <Button className="edit-button">Edit</Button>
                    </Link>
                    <Button
                variant="danger"
                className="delete-button"
                style={{ marginLeft: '10px' }}  // Inline style to add left margin
                onClick={() => deleteHandler(note._id)}
              >
                Delete
              </Button>

                  </div>
                </Card.Header>
                <Accordion.Body>
                  <Card.Body>
                    <h4>
                      <Badge pill bg="success">
                        Category - {note.category}
                      </Badge>
                    </h4>
                    <blockquote className="blockquote mb-0">
                      <p>{note.content}</p>
                      <footer className="blockquote-footer">
                        Created On - {note.createdAt.substring(0, 10)}
                      </footer>
                    </blockquote>
                  </Card.Body>
                </Accordion.Body>
              </Card>
            </Accordion>
          ))}
          </div>
      </MainScreen>
    </div>
  );
};
export default MyNotes;
