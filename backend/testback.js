import {
    getAllFilms, getAllActivities, getAllGuests, getFilmById, getActivityById, getGuestById, getActivitiesByAnimateurName, update, createUser, loginUser, logoutUser  
} from './backend.mjs'

// Test récupération de tous les films
// try {
//     const films = await getAllFilms();
//     console.log("Liste des films triés par date :", films);
// } catch (e) {
//     console.error("Erreur lors de la récupération des films :", e);
// }

// Test récupération de toutes les activités
// try {
//     const activities = await getAllActivities();
//     console.log("Liste des activités triées par date :", activities);
// } catch (e) {
//     console.error("Erreur lors de la récupération des activités :", e);
// }

// Test récupération de tous les invités
// try {
//     const guests = await getAllGuests();
//     console.log("Liste des invités triés par ordre alphabétique :", guests);
// } catch (e) {
//     console.error("Erreur lors de la récupération des invités :", e);
// }

// Test récupération d'un film par ID
// try {
//     const filmId = "26l922y18gdcs52";
//     const film = await getFilmById(filmId);
//     console.log("Détails du film :", film);
// } catch (e) {
//     console.error("Erreur lors de la récupération du film :", e);
// }

// Test récupération d'une activité par ID
// try {
//     const activityId = "99ztzx6py59rckz";
//     const activity = await getActivityById(activityId);
//     console.log("Détails de l'activité :", activity);
// } catch (e) {
//     console.error("Erreur lors de la récupération de l'activité :", e);
// }

// Test récupération d'un invité par ID
// try {
//     const guestId = "91738b9h7z68d7f";
//     const guest = await getGuestById(guestId);
//     console.log("Détails de l'invité :", guest);
// } catch (e) {
//     console.error("Erreur lors de la récupération de l'invité :", e);
// }

// Test récupération des activités d'un animateur par ID 
// try {
//     const animatorId = '2ck5ombvbj29p35';
//     const animatorActivities = await getActivitiesByAnimatorId(animatorId);
//     console.log("Activités de l'animateur par ID :", animatorActivities);
// } catch (e) {
//     console.error("Erreur lors de la récupération des activités de l'animateur :", e);
// }

// Test récupération des activités d'un animateur par nom
// try {
//     const activitiesByName = await getActivitiesByAnimateurName("Don");
//     console.log(activitiesByName);
// } catch (e) {
//     console.error(e);
// }


// try {
//     await update("Films", 'i3nmrgqx7032st9', {titre_film: "Toy Story"});
// } catch (e) {
//     console.error(e);
// }


// Test pour la création d'un utilisateur
// try {
//     await createUser("user1@test.fr", "123456789");
// } catch (e) {
//     console.error(e);
// }

// Test de connexion utilisateur
// try {
//     await loginUser("user1@test.fr", "123456789");
//     console.log("Utilisateur connecté ?", isLoggedIn());
// } catch (e) {
//     console.error(e);
// }

// Test de déconnexion utilisateur
// try {
//     await logoutUser();
//     console.log("Utilisateur connecté après déconnexion ?", isLoggedIn());
// } catch (e) {
//     console.error(e);
// }