const BASE_URL = 'https://us-central1-hopesy-16904.cloudfunctions.net/cause/';

async function createCause(causeFields) {
    const {
        createdBy,
        description,
        images,
        sum_target,
        title
    } = causeFields;

    if (!createdBy || !title || !sum_target) {
        throw new Error("Mandatory field missing from new cause");
    }
    
    const causeData = {
        createdBy,
        description,
        images,
        sum_target,
        sum_collected: 0,
        donations: [],
        closed: false
    };

    let resp = await fetch(BASE_URL, {
        method: 'post',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify(causeData)
    });

    if (resp.status === 200 || resp.status === 201) {
        let data = await resp.json();
        const { newId } = data;
        return newId;
    }

    throw new Error("Something bad has happened");

}

async function getAllCauses() {
    let resp = await fetch(BASE_URL, { method: 'get' });
    if (resp.status === 200 || resp.status === 304) {
        let data = await resp.json();
        return data;
    }
    throw new Error("Something bad has happened");
}

async function getCauseById(uid) {
    let resp = await fetch(BASE_URL + uid, { method: 'get' });
    if (resp.status === 404) {
        return undefined;
    }
    if (resp.status === 200 || resp.status === 304) {
        let data = await resp.json();
        return data;
    }
    throw new Error("Something bad has happened");
}

async function getImageStringFromURL(image_url) {
    let resp = await fetch(image_url, { method: 'get' });
    console.log(resp);
    let data = await resp.text();
    return data;
}


module.exports = {
    createCause,
    getAllCauses,
    getCauseById,
    getImageStringFromURL
}