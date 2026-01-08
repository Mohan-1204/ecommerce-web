import React, { use, useState } from "react";
import styled from 'styled-components'
// import CounterApp from "./counterApp";
import { FaTrashCan } from "react-icons/fa6";
import { FaRegEdit } from "react-icons/fa";
import { CiSaveDown2 } from "react-icons/ci";
import { IoMdAddCircle } from "react-icons/io";



const ToDoApps = () => {
    let [items, setItems] = useState([
      { id: 1, label: "Html & CSS", checked: true },
      { id: 2, label: "JavaScript", checked: true },
      { id: 3, label: "React Js", checked: false },
    ]);


    
    let [newItem, setNewItem] = useState("");
    let [isEdit, setisEdit] = useState(false);
    let [crntEleId, setcrntEleId] = useState(null);
    


    let handleChecked = (id) => {
      let newlistItems = items.map((cEle) => {
        return cEle.id === id ? { ...cEle, checked: !cEle.checked } : cEle;
      });
      setItems(newlistItems);
    };
    


    let handlUpdate = (id) => {
      let listItem = items.find((cEle) => cEle.id === id);
      setNewItem(listItem.label);
      setisEdit(true);
      setcrntEleId(id);
    };


    
    let handleDelete = (id) => {
      let newItems = items
        .filter((cEle) => cEle.id !== id)
        .map((cEle, index) => {
          return { ...cEle, id: index + 1 };
        });    
      setItems(newItems);
    };
    


    let handleAddorSaveItem = () => {
      if (isEdit) {
        let newlistItems = items.map((cEle) => {
          return cEle.id === crntEleId ? { ...cEle, label: newItem } : cEle;
        });
        setItems(newlistItems);
        setcrntEleId(null);
        setNewItem("");
        setisEdit(false);
      }
      else {
        setItems([
          ...items,
          {
            id: items.length + 1,
            label: newItem,
            checked: false,
          },
        ]);
      }
      setNewItem("");
    };


    return (
        <main>
          <div>
          <input
            type="text"
            value={newItem}
            placeholder="Add New Item"
            onChange={(e) => {
              setNewItem(e.target.value);
            }}
        />
                

        <button onClick={handleAddorSaveItem}>
            {isEdit ? (
              <CiSaveDown2 color="green" />
            ) : (
              <IoMdAddCircle color="blue" />
            )}
        </button>
        </div>
                

        <ul>
          {items.map((cEle) => {
            return (
              <li key={cEle.id} className="hii">
                <input
                  type="checkbox"
                  checked={cEle.checked}
                  onChange={() => handleChecked(cEle.id)}
                    />
                    

                    <label> {cEle.label}</label>
                    

                <FaRegEdit
                  id="edit"
                  role="button"
                  tabIndex={0}
                  onClick={() => handlUpdate(cEle.id)}
                    />
                    

                <FaTrashCan
                  id="delete"
                  role="button"
                  tabIndex={0}
                  onClick={() => handleDelete(cEle.id)}
                />
              </li>
            );
          })}
                

        </ul>
      </main>
    );
    };



export default ToDoApps;

