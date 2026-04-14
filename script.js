function runOption() {
    let choice = document.getElementById("choice").value;
    let output = "";

    if (choice == "1") {
        output = "Linux Commands:\nls - list files\npwd - current folder\ncd - change folder";
    } 
    else if (choice == "2") {
        output = "Interview Questions:\n1. What is Linux?\n2. What is SSH?\n3. What is chmod?";
    } 
    else if (choice == "3") {
        output = "Troubleshooting:\nSSH not working → restart ssh\nDisk full → use df -h\nPermission denied → use chmod";
    } 
    else if (choice == "4") {
        output = "Quick Revision:\ndf -h → disk\nfree -m → memory\ntop → CPU";
    } 
    else if (choice == "5") {
        output = "Exiting...";
    } 
    else {
        output = "Invalid choice";
    }

    document.getElementById("output").innerText = output;
}