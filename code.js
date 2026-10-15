// Get the file name from the previous node and convert it to lowercase for easy matching
const fileName = $input.first().json.name.toLowerCase();

// Initialize default values
let subject = "General";
let targetFolderId = "DEFAULT_MAIN_FOLDER_ID"; // Fallback general folder ID

// Map of main subjects to their respective Google Drive Folder IDs
const mainFolders = {
  "Graphes et opt": "ID_Graphes_et_opt",
  "Techno multimedia": "ID_Techno_multimedia",
  "Méth conc logiciel": "ID_Meth_conc_logiciel",
  "P.O.O": "ID_POO",
  "Gestion d'entreprise": "ID_Gestion_entreprise",
  "Prog python": "ID_Prog_python",
  "Architecture micro C-P": "ID_Architecture_micro_CP",
  "Proba et stat": "ID_Proba_et_stat",
  "Base de données": "ID_Base_de_donnees",
  "Capteur et instruments": "ID_Capteur_et_instruments",
  "Réseau local indu": "ID_Reseau_local_indu",
  "Anglais": "ID_Anglais"
};

// Identify the academic subject based on keywords in the file name
if (fileName.includes("graph") || fileName.includes("opt")) subject = "Graphes et opt";
else if (fileName.includes("multi") || fileName.includes("techno")) subject = "Techno multimedia";
else if (fileName.includes("meth") || fileName.includes("logiciel")) subject = "Méth conc logiciel";
else if (fileName.includes("poo") || fileName.includes("oop")) subject = "P.O.O";
else if (fileName.includes("gest") || fileName.includes("entreprise")) subject = "Gestion d'entreprise";
else if (fileName.includes("py") || fileName.includes("prog")) subject = "Prog python";
else if (fileName.includes("arch") || fileName.includes("micro")) subject = "Architecture micro C-P";
else if (fileName.includes("proba") || fileName.includes("stat")) subject = "Proba et stat";
else if (fileName.includes("db") || fileName.includes("base") || fileName.includes("donnees")) subject = "Base de données";
else if (fileName.includes("capt") || fileName.includes("instrument")) subject = "Capteur et instruments";
else if (fileName.includes("reseau") || fileName.includes("local")) subject = "Réseau local indu";
else if (fileName.includes("ang") || fileName.includes("eng")) subject = "Anglais";

// Retrieve the corresponding folder ID if the subject exists in the map
if (mainFolders[subject]) {
  targetFolderId = mainFolders[subject];
}

// Return the structured JSON output for the next node
return [{
  json: {
    fileName: $input.first().json.name,
    subject: subject,
    fileId: $input.first().json.id,
    targetFolderId: targetFolderId
  }
}];
}];
