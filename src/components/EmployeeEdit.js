// components/EmployeeEdit.js
import React, { useState, useEffect } from 'react';

function EmployeeEdit({ employee, onSubmit }) {
  const [name, setName] = useState(employee?.name || '');
  const [email, setEmail] = useState(employee?.email || '');
  const [mobile, setMobile] = useState(employee?.mobile || '');
  const [designation, setDesignation] = useState(employee?.designation || '');
  const [gender, setGender] = useState(employee?.gender || '');
  const [courses, setCourses] = useState({
    mca: employee?.courses.includes('mca') || false,
    bca: employee?.courses.includes('bca') || false,
    bsc: employee?.courses.includes('bsc') || false,
  });
  const [photo, setPhoto] = useState(employee?.photo || null);

  useEffect(() => {
    if (employee) {
      setName(employee.name);
      setEmail(employee.email);
      setMobile(employee.mobile);
      setDesignation(employee.designation);
      setGender(employee.gender);
      setCourses({
        mca: employee.courses.includes('mca'),
        bca: employee.courses.includes('bca'),
        bsc: employee.courses.includes('bsc'),
      });
      setPhoto(employee.photo);
    }
  }, [employee]);

  const handleCourseChange = (e) => {
    const { name, checked } = e.target;
    setCourses((prevCourses) => ({
      ...prevCourses,
      [name]: checked,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const selectedCourses = Object.keys(courses).filter(course => courses[course]);

    const updatedEmployee = {
      ...employee,
      name,
      email,
      mobile,
      designation,
      gender,
      courses: selectedCourses,
      photo,
    };

    onSubmit(updatedEmployee); //  It will Pass the updated employee data to App.js
  };

  return (
    <div>
      <h4>Edit Employee</h4>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name</label>
          <input type="text" className="form-control" value={name} onChange={(e) => setName(e.target.value)} required />
        </div>

        <div className="form-group mt-3">
          <label>Email</label>
          <input type="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>

        <div className="form-group mt-3">
          <label>Mobile</label>
          <input type="text" className="form-control" value={mobile} onChange={(e) => setMobile(e.target.value)} required />
        </div>

        <div className="form-group mt-3">
          <label>Designation</label>
          <select
            className="form-control"
            value={designation}
            onChange={(e) => setDesignation(e.target.value)}
            required
          >
            <option value="">Select Designation</option>
            <option value="HR">HR</option>
            <option value="Manager">Manager</option>
            <option value="Sales">Sales</option>
          </select>
        </div>

        <div className="form-group mt-3">
          <label>Gender</label>
          <div>
            <label className="mr-3">
              <input
                type="radio"
                name="gender"
                value="Male"
                checked={gender === "Male"}
                onChange={() => setGender("Male")}
                required
              />{" "}
              Male
            </label>
            <label>
              <input
                type="radio"
                name="gender"
                value="Female"
                checked={gender === "Female"}
                onChange={() => setGender("Female")}
                required
              />{" "}
              Female
            </label>
          </div>
        </div>

        <div className="form-group mt-3">
          <label>Courses</label>
          <div>
            <label className="mr-3">
              <input
                type="checkbox"
                name="mca"
                checked={courses.mca}
                onChange={handleCourseChange}
              />{" "}
              MCA
            </label>
            <label className="mr-3">
              <input
                type="checkbox"
                name="bca"
                checked={courses.bca}
                onChange={handleCourseChange}
              />{" "}
              BCA
            </label>
            <label>
              <input
                type="checkbox"
                name="bsc"
                checked={courses.bsc}
                onChange={handleCourseChange}
              />{" "}
              BSc
            </label>
          </div>
        </div>

        <div className="form-group mt-3">
          <label>Photo</label>
          <input
            type="file"
            className="form-control"
            onChange={(e) => setPhoto(e.target.files[0])}
          />
        </div>

        <button type="submit" className="btn btn-success mt-4">Save Changes</button>
      </form>
    </div>
  );
}

export default EmployeeEdit;
