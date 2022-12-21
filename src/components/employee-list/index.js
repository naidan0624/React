import React, { useState } from "react";
import EmployForm from "./form";
import CardInfo from "./employeecard";
import "./index.css";

const EmployeeList = () => {
  const [employs, setemploys] = useState([]);
  const [editEmpInfo, setEditEmInfo] = useState(-1);
  const onDelete = () => {};
  console.log("employs", employs);

  return (
    <div>
      <EmployForm
        onFormSubmit={(empinfo) => {
          
          if(editEmpInfo === -1){
            setemploys((currState) => {
              return [...currState, empinfo];
            });
          } else {
            setemploys((currState)=>{
              return currState.map((emp,empIdx)=>{
                if(empIdx === empinfo.empIdx ){
                  return empinfo
                }else { 
                  return emp

                }
              })
            })
            setEditEmInfo(-1)
          }
          
        }}
        editEmpInfo={editEmpInfo}
      />
      <div className="innerContainer">
      {employs.map((emplinfo, emplinfoIdx) => {
        return (
          <CardInfo
            employee={emplinfo}
            key={emplinfoIdx}
            onEmployeeDelete={() => {
              setemploys((currState) => {
                return currState.filter((emp, empIdx) => {
                  if (emplinfoIdx !== empIdx) {
                    return emp;
                  }
                });
              });
            }}
            onEmployeeEdit = {()=>{
              setEditEmInfo(({...emplinfo,empIdx : emplinfoIdx}))
            }}
          />
        );
      })}
    </div></div>
  );
};

export default EmployeeList;
