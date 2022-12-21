import {BiEdit} from 'react-icons/bi'
import {MdDelete} from 'react-icons/md'

const CardInfo = ({ employee, onEmployeeDelete, onEmployeeEdit }) => {
  return (
    <div className="bigContainer">
      <div className="containerList">
        
          <img className="picavatar"
            src={employee.picture}
            alt="gggg"
            style={{ margin: "0 auto" }}
            width={"80"}
            height={"80"}
          />
        
        <div className="card">
          <div className="ner">
            <h4>{employee.firstName}</h4>
            <br />
            <h4> {employee.lastName}</h4>
          </div>
          <br />
          {employee.companyName}
          <br />
          {employee.role}
          <br />
          Ph:{employee.phoneNumber}
          <br />
          {employee.address}
          <br />
          {employee.address1}
          <br />
          {employee.address2}
          <br />
          {employee.city}
          <br />
          {employee.state}
          <br />
          {employee.zip}
        </div>
        <div className="edit">
          <div
            onClick={() => {
              onEmployeeEdit();
            }}
          >
            <BiEdit/>
            Edit
          </div>
          <div
            onClick={() => {
              onEmployeeDelete();
            }}
          > 
          <MdDelete/>
            Delete
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardInfo;
