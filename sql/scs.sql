create table Voyage (
    idVoyage integer primary key,
    dateReservation date not null, 
    dateDebut date not null, 
    dateFin date not null,
    prixTotal integer not null,
    lieuVoyage varchar(20) not null,
    dateEpoqueVoyage date not null
)

ALTER TABLE Voyage MODIFY idVoyage integer NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=0;

create table Voyageur (
    idVoyageur integer primary key,
    nom varchar(20) not null,
    prenom varchar(20) not null,
    dateNaissance date not null,
    sexe char not null /* M/F */
)

ALTER TABLE Voyageur MODIFY idVoyageur integer NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=0;