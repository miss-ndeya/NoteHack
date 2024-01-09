import Input from "./Input";
import Button from "./Button";

const Form = ({ value, onChange, handleSubmit, modifierId }) => {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit();
      }}
      className="bg-white my-5 d-flex p-3 rounded-3"
    >
      <Input
        className="w-100 border px-2 py-2 rounded-2  fs-6"
        placeholder="Add note"
        value={value}
        onChange={onChange}
      />
      <Button
        children={modifierId ? "Update" : "Add"}
        className="btn fs-6 px-4 py-1  btn-success ms-2"
      />
    </form>
  );
};

export default Form;
