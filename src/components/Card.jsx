import Title from "./Title";
import { MdDelete } from "react-icons/md";
import { FaPen } from "react-icons/fa6";

const Card = ({ note, removeNote, editNote }) => {
  return (
    <div className="col-12 col-md-6 col-lg-4 rounded-3">
      <div className="card pb-0 justify-content-center shadow hcrd border-start border-3 border-0 border-primary">
        <div className="card-body d-flex justify-content-between pb-0 mb-0 gap-">
          <div className="card-title p-">
            <Title
              children={note.note}
              className="card-title fs-5 fw-normal mb"
            />
            <p className="text-wrap not text-secondary">{note.date}</p>
          </div>
          <div className="card-text  d-flex px- pb-0 mb-0">
            <FaPen
              className="text-primary me-2"
              onClick={() => editNote(note.id)}
            />
            <MdDelete
              className="text-danger fs-5 curseur-pointer"
              onClick={() => removeNote(note.id)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
