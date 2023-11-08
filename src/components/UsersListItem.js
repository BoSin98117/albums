import { GoTrash } from 'react-icons/go';
import Button from './Button';
import { removeUser } from '../store';
import { useThunk } from '../hooks/use-thunk';
import ExpandablePanel from './ExpandablePanel';
import AlbumsList from './AlbumsList';


function UsersListItem({ user }) {
    const [doRemoveUser, isLoading, error] = useThunk(removeUser);

    const handleClick = () => {
        doRemoveUser(user);
    }

    const header = <>
        <Button className='mr-3' loading={isLoading} onClick={handleClick}>
            <GoTrash />
        </Button>
        {error && <div>Error deleting user...</div>}
        <div className='text-lg font-bold text-red-500'>{user.name}</div>
    </>;


    return (
        <ExpandablePanel header={header}>
            <AlbumsList user={user} />
        </ExpandablePanel>
    )
}

export default UsersListItem;