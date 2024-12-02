import React, { useState } from "react";
import "../CSS/Support.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";

const Support = () => {
  // 입력 데이터와 리스트 상태를 관리
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    title: "",
    contents: "",
  });

  const [supportList, setSupportList] = useState([]);

  // 입력값 변경 핸들러
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // 폼 제출 핸들러
  const handleSubmit = (e) => {
    e.preventDefault();
    setSupportList([...supportList, formData]); // 리스트에 새 데이터 추가
    setFormData({ name: "", phone: "", email: "", title: "", contents: "" }); // 폼 초기화
  };

  // 지원 요청 삭제 핸들러
  const handleDelete = (indexToDelete) => {
    const updatedList = supportList.filter(
      (_, index) => index !== indexToDelete
    );
    setSupportList(updatedList);
  };

  return (
    <div className="support-container">
      <h1>Support Page</h1>
      {/* 입력 폼 */}
      <form onSubmit={handleSubmit} className="support-form">
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Phone:</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Title:</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Contents:</label>
          <textarea
            name="contents"
            value={formData.contents}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>

      {/* 지원 요청 리스트 */}
      <div className="support-list">
        <h2>Support Requests</h2>
        {supportList.length === 0 ? (
          <p>No support requests yet.</p>
        ) : (
          <ul>
            {supportList.map((item, index) => (
              <li key={index}>
                <strong>제목: {item.title}</strong>
                <p>
                  이름: {item.name} , 이메일 ({item.email}), 전화번호(
                  {item.phone})
                </p>

                <p>내용: {item.contents}</p>
                <FontAwesomeIcon
                  icon={faTrashAlt}
                  className="delete-icon"
                  onClick={() => handleDelete(index)}
                  title="Delete"
                />
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Support;
