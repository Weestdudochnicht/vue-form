export const UserName = { "label": "Name", required, "name": "Name", "id": "Name", "value": "", "placeholder": "Enter Name ...", textPattern, textError };

export const UserForName = { "label": "Forename", required, "name": "Forename", "id": "Forename", "value": "", "placeholder": "Enter Forename ...", textPattern, textError };

const textPattern = {
    "pattern": "^[A-Za-z]{1,13}$"
};

const textError = {
    "error": "Letter Only! At least 1 and max 13."
}

const required = {
    "required": true
}