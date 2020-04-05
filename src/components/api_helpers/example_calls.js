import {
    getUserById,
    getAllUsers,
    updateUserFields,
    registerUser
} from './user';

import {
    createCause,
    getAllCauses,
    getCauseById,
    getImageStringFromURL
} from './cause';

import {
    createDonation,
    getAllDonations,
    getDonationById
} from './donation';

async function examples() {

    // UNCOMMENT THE CONSOLE LOGS IF YOU WANT TO SEE THEM

    if (false) {
    // Correct id - logs user object
        let user = await getUserById("ZLqLDpJIcKTA1qghjFwZqlL3DvZ2");
        console.log(user); 
    }

    if (false) {
    // Incorrect id - logs undefined
        let user =  await getUserById("dummy");
        console.log(user);
    }

    if (false) {
        // Get all users
        let users = await getAllUsers();
        // Log an array of users
        console.log(users);
    }

    if (false) {
        // Update almost all fields of the user with the id hehe
        // No retval if success, Error if fail
        await updateUserFields({
            "id": "hehe",
            "location": "Bp",
            "age": 43,
            "verified": true,
            "anonymous": false,
            "bank_account": {
                "account_number": "12345678-25364567",
                "holder_name": "Hehe Zoltan"
            },
            "situation": [
                "unemployed",
                "single"
            ]
        });
    }

    if (false) {
        // Register a user - logs created uid if success, error if fail
        // THIS UID WILL ONLY SUCCEED ONCE!!!
        let uid = registerUser("dummy2", "Gipsz Jakab2", "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Goat_face.jpg/1200px-Goat_face.jpg");
        console.log(uid);
    }

    if (false) {
        // Create new cause - with default image
        let id = await createCause({
            createdBy: "creator_user_uuid",
            description: "This is my OPTIONAL description",
            sum_target: 5000,
            title: "Small shopping"
        })
        console.log(id);
        // Create new cause with custom image
        id = await createCause({
            createdBy: "creator_user_uuid",
            description: "This is my OPTIONAL description",
            images: ["image_data_uri_string -> Levi, ahogy linkeltem meg beszeltuk"],
            sum_target: 5000,
            title: "Small shopping"
        })
        console.log(id);
    }

    if (false) {
        // Get all causes
        let causes = await getAllCauses();
        console.log(causes);
    }

    if (false) {
        // Get a single cause
        const causeId = "xUjBEgjCuF3KousZY2o5";
        let cause = await getCauseById(causeId);
        console.log(cause);
    }


    if (false) {
        // ITT VAN A CORS ISSUE, az alábbi URL-re küldött GET kérésnél. A cloud storageot kell configolni, Küldtem linket slackbe
        const imageURL = "https://storage.googleapis.com/hopesy-16904.appspot.com/causes/692206c1-53b0-4367-952d-e5f16a441766.jpg?GoogleAccessId=hopesy-16904%40appspot.gserviceaccount.com&Expires=1586304720&Signature=oF4wjyj2fxu4tAVZFh5BsEezYtp6yoMWwakTJcKZYxI29NsF9onT7XNSAcnStzaaxyTIYbUUZ6z5rlkq8Y5ukoox9Dtg9fih8ocG6F7i%2BLyNGSlZ%2BVX9m2B11kMl0qRgN6iAOBWBOnnnklD9XfeFJEBYdNqhsc0ENuKaf72RPGJzVz7ydULGt6T8J7Sskt4lxuBCyvMATg2xe5CMp02bDhmAW%2B%2BYiebF9IAUILm%2BlUQyp%2BGRfM32AjFbCb3MnC8EXscf%2Fe8ex8yCo3Azism1p0kubJFbBkjrCKpepSM3KiVcuqi1rEz5hRnnWruAiSR3obeiOVhZeWPyGT4IAbA8xw%3D%3D";
        let imageString = await getImageStringFromURL(imageURL);
        console.log(imageString);
    }

    if (false) {
        const donationData = {
            cause_id: "cause_id",
            sender: "sender_uid",
            receiver: "receiver_uid",
            amount: 300
        }
        let id = await createDonation(donationData);
        console.log(id);
    }

    if (false) {
        let donations = await getAllDonations();
        console.log(donations);
    }

    if (true) {
        const donation_id = "k3fTr2EBHSRIeNVs1JSb";
        let donation = await getDonationById(donation_id);
        console.log(donation);
    }



}

export default examples;