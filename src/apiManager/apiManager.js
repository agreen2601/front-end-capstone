const remoteURL = "http://localhost:5001";

export default {
  getAssignments() {
    return fetch(`${remoteURL}/assignments/?_expand=route&_expand=vehicle&_expand=driver`).then(result =>
      result.json()
    );
  },
  getType(type) {
    return fetch(`${remoteURL}/${type}`).then(result =>
      result.json()
    );
  },
  getSingleItem(type, id) {
    return fetch(`${remoteURL}/${type}/${id}`).then(result =>
      result.json()
    );
  },
  getTypeWithAssignments(type) {
    return fetch(`${remoteURL}/${type}/?_embed=assignments`).then(result =>
        result.json()
      );
  },
  getTypeWithId(type, id) {
    return fetch(`${remoteURL}/${type}/${id}?_embed=assignments`).then(result =>
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
