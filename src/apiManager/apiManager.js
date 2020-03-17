const remoteURL = "http://localhost:5001";

export default {
  getAssignments() {
    return fetch(`${remoteURL}/assignments/?_expand=route&_expand=vehicle&_expand=driver`).then(result =>
      result.json()
    );
  },
  getDriver(id) {
    return fetch(`${remoteURL}/drivers/${id}`).then(result =>
      result.json()
    );
  },
  addDriver(newDriver) {
    return fetch(`${remoteURL}/drivers`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newDriver)
    }).then(data => data.json());
  },
  addVehicle(newVehicle) {
    return fetch(`${remoteURL}/vehicles`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newVehicle)
    }).then(data => data.json());
  },
  addAssignment(newAssignment) {
    return fetch(`${remoteURL}/assignments`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newAssignment)
    }).then(data => data.json());
  }
};
