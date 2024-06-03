const Contact = () => {
  return (
    <div>
      <h1 className="font-bold text-3xl text-center mt-3">Contact Us Page</h1>
      <form action="" className="text-center">
        <input
          type="text"
          className="border border-black p-2 m-2"
          placeholder="Name"
        />
        <input
          type="text"
          className="border border-black p-2 m-2"
          placeholder="Message"
        />
        <button className="border border-black rounded-lg bg-gray-50 p-2 m-2">
          Submit
        </button>
      </form>
    </div>
  );
};
export default Contact;
