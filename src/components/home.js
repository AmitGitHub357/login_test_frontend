import React, { useState, useEffect } from "react";
import axios from "axios";
const Home = () => {
  const [list, setList] = useState([]);
  useEffect(() => {
    axios
      .get("https://localhost:5000/api/user/")
      .then((res) => setList(res.data));
  }, []);

  return (
    <>
      <div className="container">
        <div className="my-5 ">
          <h3 className="text-center">Our Users</h3>
          <div>
            <table className="border my-5">
              <thead>
                <tr>
                  <th className="p-3">Name</th>
                  <th className="p-3">Email</th>
                  <th className="p-3"> role</th>
                  <th className="p-3">Mobile</th>
                  <th className="p-3">IsActive</th>
                </tr>
              </thead>
              <tbody>
                {list.map((data) => {
                  return (
                    <div>
                      { console.log() }
                      <h1>{data.name}</h1>
                    </div>
                  );
                })}
                {/* { list.forEach((res) => {
                  const { id, title, completed } = res;
                  return(<td>{id}</td>);
                }) }
                 */}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};
export default Home;
