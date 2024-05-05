import { failureRes } from "..";
import { account } from "./accounts";

export * from "./accounts";

export type base64 = string
export type loginRes = loginResSuccess | failureRes | A2FRes

export type A2FRes = {
	code: 250,
	token: string,
	message: 'Identifiant et/ou mot de passe invalide !',
	data: { changementMDP: false, accounts: [] }
}

export type A2FQCM = {
    code: 200,
    data: {
		question: base64, 
        propositions: Array<base64>
    },
    message: null, // ???
    host: "HTTP<n° serveur>"
}

export type A2FQCMRes = {
    code: 200,
    data: {
		cn: base64, 
        cv: base64,
    },
    message: null, // ???
    host: "HTTP<n° serveur>"
}

export type loginResSuccess = {
	code: 200;
	token: string;
	message: "";
	data: {
		accounts: Array<account>;
	};
};
