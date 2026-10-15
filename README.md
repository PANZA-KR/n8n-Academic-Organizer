# 📚 Smart Academic Document Auto-Organizer (n8n & Google Drive)

## 🎯 The Problem
As students, we frequently capture photos of course materials, lectures, and assignments using our phones. Over time, these images accumulate, clutter our galleries, get mixed with personal photos, and become extremely difficult to locate when needed for studying. Manually sorting and organizing them into appropriate folders is tedious and inefficient.

## 💡 The Solution
An automated workflow built with **n8n** and **Google Drive** that solves this completely. Instead of manual sorting, you simply scan your documents into PDFs from your phone, name them with the subject keyword, and the system automatically routes them to their exact subject folder in the cloud!

---

📱 How It Works (User Guide)

1. **Create the Trigger Folder:** Set up a specific folder in your Google Drive (e.g., `Inbox` or `Scan_Folder`) to act as your upload trigger.
2. **Scan & Upload:** Open Google Drive on your phone,open the folder, tap the `+` button, select **Scan**, take photos of your course materials or assignments, and save them as a PDF.
3. **Smart Naming:** Name the file with a clear keyword related to your subject (e.g., writing `python_notes.pdf` or `db_assignment.pdf`).
4. **Automatic Organization:** The n8n automation detects the new file instantly, reads its name via custom JavaScript logic, and moves it to the correct subject folder automatically!

---

## ⚙️ Workflow Architecture
* **Trigger:** Google Drive (Watching for new files in the upload folder)
* **Processing Node:** n8n Code Node (JavaScript logic for keyword detection and folder mapping)
* **Action Node:** Google Drive (Dynamic file transfer to the target subject folder)

---

## 🛠️ Core JavaScript Logic
Here is the core script utilized inside the n8n Code node to parse file names and map them to their respective subject folder IDs:

```javascript
const fileName = $input.first().json.name.toLowerCase();

let subject = "General";
let targetFolderId = "DEFAULT_MAIN_FOLDER_ID";

const mainFolders = {
  "Prog python": "ID_Prog_python",
  "Base de données": "ID_Base_de_donnees",
  // ... (Configured for all your subjects)
};

if (fileName.includes("python") || fileName.includes("prog")) subject = "Prog python";
else if (fileName.includes("db") || fileName.includes("base")) subject = "Base de données";

if (mainFolders[subject]) {
  targetFolderId = mainFolders[subject];
}

return [{
  json: {
    fileName: $input.first().json.name,
    subject: subject,
    fileId: $input.first().json.id,
    targetFolderId: targetFolderId
  }
}];
```

✨ Key Benefits
Zero Clutter: Eliminates lost study notes and unorganized files in phone galleries.

Fully Automated: Operates seamlessly in the background.

Real-World Application: Bridges mobile productivity (scanning notes) with cloud automation.
