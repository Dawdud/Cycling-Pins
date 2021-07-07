import { createContext, Component } from "react";
import { auth, generateUserDocument } from "../config/firebase"
import { IUserProvider } from "../Interfaces/IUserProvider";
export const UserContext = createContext({ user: null });



class UserProvider extends Component<IUserProvider> {

    state: IUserProvider = {
        user: null
    }
    componentDidMount = () => {
        auth.onAuthStateChanged(async (userAuth): Promise<void> => {
            const user = await generateUserDocument(userAuth);

            this.setState({ user });
        });
    };
    render() {
        const user: any = this.state.user
        return (
            <UserContext.Provider value={user}>
                {this.props.children}
            </UserContext.Provider>
        );
    }

}
export default UserProvider;