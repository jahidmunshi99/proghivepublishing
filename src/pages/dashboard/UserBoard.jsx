const UserBoard = () => {
  return (
    <>
      <div className="pb-5">
        <p className="text-2xl font-semibold">Welcome, Jahid Munshi</p>
        <span>
          Find important messages, tips, and links to helpful resources here:
        </span>
      </div>
      <div className="border-gray-200 rounded border p-4 flex justify-between">
        <div>
          <h2 className="font-bold text-lg">Set up inbox auto replies</h2>
          <p>
            Greet new potential buyers with an auto reply to their first
            message.{" "}
          </p>
        </div>
        <div className="cursor-pointer hover:text-red-500 transition-all">
          X
        </div>
      </div>
    </>
  );
};

export default UserBoard;
