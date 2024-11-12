import React, { useState } from 'react';

function CreateEmployee({ onSubmit }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [designation, setDesignation] = useState('');
  const [gender, setGender] = useState('');
  const [courses, setCourses] = useState({
    mca: false,
    bca: false,
    bsc: false,
  });
  const [photo, setPhoto] = useState(null);
  const [photoPreview, setPhotoPreview] = useState(null);

  const handleCourseChange = (e) => {
    const { name, checked } = e.target;
    setCourses((prevCourses) => ({
      ...prevCourses,
      [name]: checked,
    }));
  };

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    setPhoto(file);
    setPhotoPreview(URL.createObjectURL(file)); // Generate preview URL for the photo
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const selectedCourses = Object.keys(courses).filter(course => courses[course]);

    const newEmployee = {
      id: Date.now(), // Based on timestamp it will generate a  unique id
      name,
      email,
      mobile,
      designation,
      gender,
      courses: selectedCourses,
      photo: photoPreview, // Store the photo preview URL
    };

    onSubmit(newEmployee); // Pass the new employee data to App.js
    // Reset form fields after submission
    setName('');
    setEmail('');
    setMobile('');
    setDesignation('');
    setGender('');
    setCourses({ mca: false, bca: false, bsc: false });
    setPhoto(null);
    setPhotoPreview(null);
  };

  return (
    <div>
      <h4>Create Employee</h4>
      <form onSubmit={handleSubmit}>
       
        <div className="d-flex align-items-center mb-3">
          <label className="w-25 pr-3">Name</label>
          <input
            type="text"
            className="form-control w-50" 
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div className="d-flex align-items-center mb-3">
          <label className="w-25 pr-3">Email</label>
          <input
            type="email"
            className="form-control w-50" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="d-flex align-items-center mb-3">
          <label className="w-25 pr-3">Mobile</label>
          <input
            type="text"
            className="form-control w-50" 
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
            required
          />
        </div>

        <div className="d-flex align-items-center mb-3">
          <label className="w-25 pr-3">Designation</label>
          <select
            className="form-control w-50" 
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

       
        <div className="d-flex align-items-center mb-3">
          <label className="w-25 pr-3">Gender</label>
          <div className="w-50">
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

       
        <div className="d-flex align-items-center mb-3">
          <label className="w-25 pr-3">Courses</label>
          <div className="w-50">
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

      
        <div className="d-flex align-items-center mb-3">
          <label className="w-25 pr-3">Photo</label>
          <div className="w-50">
            <input
              type="file"
              className="form-control"
              onChange={handlePhotoChange}
            />
            {photoPreview && (
              <div className="mt-3">
                <img src={photoPreview} alt="Preview" className="img-thumbnail" style={{ maxHeight: '150px' }} />
              </div>
            )}
          </div>
        </div>

        <button type="submit" className="btn btn-success mt-4 ">Submit</button>
      </form>
    </div>
  );
}

export default CreateEmployee;
