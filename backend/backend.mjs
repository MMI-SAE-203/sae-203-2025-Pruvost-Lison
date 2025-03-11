import PocketBase from 'pocketbase';
const pb = new PocketBase('http://127.0.0.1:8090');

// Récupérer tous les films triés par date de projection
export async function getAllFilms() {
    return await pb.collection('Films').getFullList({
        sort: 'date_heure_film'
    });
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
