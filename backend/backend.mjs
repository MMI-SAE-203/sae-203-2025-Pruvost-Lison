import PocketBase from 'pocketbase';
const POCKETBASE_URL = "http://127.0.0.1:8090";
const pb = new PocketBase('https://pb-sae-203.lison-pruvost.fr:443');
export { pb };

// Récupérer tous les films triés par date de projection
export async function getAllFilms() {
    return await pb.collection('Films').getFullList({
        sort: 'date_heure_film'
    });
    // records.img=pb.files.getURL(records, records.imgUrl);
}

// Récupérer toutes les activités triées par date
export async function getAllActivities() {
    return await pb.collection('Activites').getFullList({
        sort: 'date_heure_activite'
    });
}

// Récupérer tous les invités triés par ordre alphabétique
export async function getAllGuests() {
    return await pb.collection('Invites').getFullList({
        sort: 'nom_invite'
    });
}

// Récupérer les infos d'un film par ID
export async function getFilmById(id) {
    return await pb.collection('Films').getOne(id);
}

// Récupérer les infos d'une activité par ID
export async function getActivityById(id) {
    return await pb.collection('Activites').getOne(id);
}

// Récupérer les infos d'un invité par ID
export async function getGuestById(id) {
    return await pb.collection('Invites').getOne(id);
}

// Récupérer toutes les activités d’un animateur par ID
export async function getActivitiesByAnimatorId(id) {
    return await pb.collection('Activites').getFullList({
        filter: `invite_associe.id = '${id}'`
    });
}

// Récupérer toutes les activités d’un animateur par son nom
export async function getActivitiesByAnimateurName(nomAnimateur) {
    const records = await pb.collection('Activites').getFullList({
        filter: `invite_associe.nom_invite = "${nomAnimateur}"`,
        expand: 'invite_associe'
    });
    return records;
}

// Ajouter ou modifier un film, une activité ou un invité
export async function update(collection, id, data) {
         await pb.collection(collection).update( id, data);
}

// Test pour l'Anthentification par mail 
export async function createUser(email, password) {
    try {
        await pb.collection("users").create({
            email: email,
            password: password,
            passwordConfirm: password
        });
        console.log("Utilisateur a été créé avec succès !");
    } catch (e) {
        console.error("Erreur lors de la création de l'utilisateur :", e);
    }
}

// Connexion de l'utilisateur
export async function loginUser(email, password) {
    try {
        await pb.collection("users").authWithPassword(email, password);
        console.log("Connexion réussie !");
        console.log("Utilisateur connecté :", pb.authStore.model);
    } catch (e) {
        console.error("Erreur de connexion :", e);
    }
}

// Vérifier si l'utilisateur est connecté
export function isLoggedIn() {
    return pb.authStore.isValid;
}

// Déconnexion d'un utilisateur
export async function logoutUser() {
    pb.authStore.clear();
    console.log("Déconnexion réussie !");
}











// test pour un film
export async function oneFilm(id) {
    try {
        const record = await pb.collection('films').getOne(id);
        return record;
    } catch (error) {
        console.error("Erreur lors de la récupération du film:", error);
        return null;
    }
}
// test pour une activite
export async function oneActivity(id) {
    try {
        return await pb.collection('Activites').getOne(id);
    } catch (error) {
        console.error('Erreur lors de la récupération de l\'activité:', error);
        return null;
    }
}

// test pour un invite
export async function oneGuest(id) {
    try {
        return await pb.collection('Invites').getOne(id);
    } catch (error) {
        console.error('Erreur lors de la récupération de l\'invité:', error);
        return null;
    }
}
