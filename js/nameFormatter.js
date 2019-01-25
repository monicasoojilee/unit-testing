class NameFormatter {

    invertName(name) {
        // name is undefined
        if (name === undefined) {
            throw new Error ("Invalid name");
        }

        // name is empty or only an honorific
        if (name === "" || name.endsWith(". ")) {
            return "";
        }

        let trimmedName = name.trim();

        // name contains an honorific
        if (trimmedName.includes(".")) {
            let honorificIndex = trimmedName.indexOf(".");
            let honorific = trimmedName.slice(0, honorificIndex).trim();
            let fullName = trimmedName.slice(honorificIndex + 1, name.length).trim();

            if (fullName.includes(" ")) {
                let spaceIndex = fullName.indexOf(" ");
                let firstName = fullName.slice(0, spaceIndex).trim();
                let lastName = fullName.slice(spaceIndex, name.length).trim();
    
                return `${honorific}. ${lastName}, ${firstName}`;
            }
            return `${honorific}. ${fullName}`
        }

        // name contains a first and last name
        if (trimmedName.includes(" ")) {
            let spaceIndex = trimmedName.indexOf(" ");
            let firstName = trimmedName.slice(0, spaceIndex).trim();
            let lastName = trimmedName.slice(spaceIndex, name.length).trim();

            return `${lastName}, ${firstName}`;
        }

        return trimmedName;
    }
}

module.exports = NameFormatter;