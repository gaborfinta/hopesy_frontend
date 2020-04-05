const BASE_URL = 'https://us-central1-hopesy-16904.cloudfunctions.net/user/';

async function registerUser(uid, name, profile_pic) {
    // Default values and parameters
    const userFields = {
        "id": uid,
        "location": null,
        "age": null,
        "verified": false,
        "anonymous": false,
        "bank_account": null,
        "situation": [],
        "name": name,
        "profile_pic": profile_pic
    };

    let resp = await fetch(BASE_URL, {
        method: 'post',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify(userFields)
    });

    if (resp.status === 200 || resp.status === 201) {
        return uid;
    }

    throw new Error("400");

}

async function getAllUsers() {
    let resp = await fetch(BASE_URL, { method: 'get' });
    if (resp.status === 200) {
        let data = await resp.json();
        return data;
    }
    throw new Error("Something bad has happened");
}

async function getUserById(uid) {
    let resp = await fetch(BASE_URL + uid, { method: 'get' });
    if (resp.status === 404) {
        return undefined;
    }
    if (resp.status === 200) {
        let data = await resp.json();
        return data;
    }
    throw new Error("Something bad has happened");
}

async function updateUserFields (userFields) {
    const { id } = userFields;
    const uid = id;
    if (!uid) {
        throw new Error("You must include a uid with your user object");
    }
    let resp = await fetch(BASE_URL + uid, {
        method: 'put',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify(userFields)
    });

    if(resp.status === 200) {
        return;
    }

    throw new Error("Something bad has happened");
    
}

module.exports = {
    registerUser,
    getAllUsers,
    getUserById,
    updateUserFields
}