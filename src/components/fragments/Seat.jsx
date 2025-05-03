import { Fragment } from "react";

const Seat = ({ seat, setSeat, setMessage }) => {
  const rows = ["A", "B", "C", "D", "E", "F", "G"];
  const cols1 = [1, 2, 3, 4, 5, 6, 7];
  const cols2 = [8, 9, 10, 11, 12, 13, 14];
  // const [seat, setSeat] = useState([]);
  const handleSeat = (id) => {
    setMessage("");
    setSeat((seat) => {
      if (seat.includes(id)) {
        const filteredSeat = seat.filter((s) => s !== id);
        return filteredSeat;
      }
      const sortedSeat = [...seat, id];
      sortedSeat.sort((a, b) => {
        const hurufA = a.slice(0, 1);
        const hurufB = b.slice(0, 1);
        const angkaA = parseInt(a.slice(1));
        const angkaB = parseInt(b.slice(1));
        if (hurufA > hurufB) return 1;
        if (hurufA < hurufB) return -1;
        return angkaA - angkaB;
      });
      return sortedSeat;
    });
  };
  return (
    <div className="flex overflow-x-scroll lg:justify-center lg:flex-row gap-8 items-center">
      <div className="grid grid-cols-[40px_repeat(7,1fr)] gap-2">
        {rows.map((row, idx) => {
          return (
            <Fragment key={idx}>
              <div
                className="text-center  flex justify-center  items-center font-bold"
                key={idx}
              >
                {row}
              </div>
              {cols1.map((col, idx) => {
                const id = `${row}${col}`;
                return (
                  <div
                    className={`${
                      seat.includes(id)
                        ? "bg-blue-600 backdrop-blur-xs"
                        : "bg-gray-300"
                    }  h-10 w-10  hover:scale-105 transition-all rounded-md hover:bg-blue-600 cursor-pointer`}
                    key={idx}
                    onClick={() => handleSeat(id)}
                  ></div>
                );
              })}
            </Fragment>
          );
        })}
        <div></div>
        {cols1.map((col) => {
          return (
            <div className="flex justify-center font-bold" key={col + 100}>
              {col}
            </div>
          );
        })}
      </div>
      <div className="grid grid-cols-[40px_repeat(7,1fr)] gap-2">
        {rows.map((row, idx) => {
          return (
            <Fragment key={idx}>
              {cols2.map((col, idx) => {
                const id = `${row}${col}`;
                return (
                  <div
                    className={`${
                      seat.includes(id) ? "bg-blue-600" : "bg-gray-300"
                    }  h-10 w-10  hover:scale-105 transition-all rounded-md hover:bg-blue-600 cursor-pointer`}
                    key={idx}
                    onClick={() => handleSeat(id)}
                  ></div>
                );
              })}
              <div
                className="text-center flex justify-center  items-center font-bold"
                key={idx + 7}
              >
                {row}
              </div>
            </Fragment>
          );
        })}
        <div className="hidden"></div>
        {cols2.map((col) => {
          return (
            <div className="flex font-bold justify-center" key={col + 200}>
              {col}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Seat;
