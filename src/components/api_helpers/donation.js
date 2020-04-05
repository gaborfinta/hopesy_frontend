const BASE_URL = 'https://us-central1-hopesy-16904.cloudfunctions.net/donation/';

async function createDonation(donationFields) {
    const {
        cause_id,
        sender,
        receiver,
        amount
    } = donationFields;

    if (!cause_id || !sender || !receiver || !amount) {
        throw new Error("Mandatory field missing from new donation");
    }
    
    const donationData = {
        cause_id,
        sender,
        receiver,
        amount,
        time_of_transaction: Date.now()
    }

    let resp = await fetch(BASE_URL, {
        method: 'post',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify(donationData)
    });

    if (resp.status === 200 || resp.status === 201) {
        let data = await resp.json();
        const { newId } = data;
        return newId;
    }

    throw new Error("Something bad has happened");

}

async function getAllDonations() {
    let resp = await fetch(BASE_URL, { method: 'get' });
    if (resp.status === 200 || resp.status === 304) {
        let data = await resp.json();
        return data;
    }
    throw new Error("Something bad has happened");
}

async function getDonationById(uid) {
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

module.exports = {
    createDonation,
    getAllDonations,
    getDonationById
}