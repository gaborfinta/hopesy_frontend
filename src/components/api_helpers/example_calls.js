import {
    getUserById,
    getAllUsers,
    updateUserFields,
    registerUser
} from './user';

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


}

export default examples;