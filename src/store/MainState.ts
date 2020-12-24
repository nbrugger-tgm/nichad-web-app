
export enum AuthAction {
	LOGIN,
	REGISTER
}

export class MainState {
	public userID: string | null = null;
	public authAction: AuthAction = AuthAction.LOGIN;
}