/**
 * WordPress dependencies.
 */
import { useBlockProps } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';

/**
 * Internal dependencies.
 */
import Rsvp from '../../components/Rsvp';
import { getFromGlobal } from '../../helpers/globals';
import EditCover from '../../components/EditCover';

/**
 * Edit component for the GatherPress RSVP block.
 *
 * This component renders the edit view of the GatherPress RSVP block.
 * It provides an interface for users to respond to the RSVP for the associated event.
 * The component includes the RSVP component and passes the event ID, current user,
 * and type of RSVP as props.
 *
 * @since 1.0.0
 *
 * @return {JSX.Element} The rendered React component.
 */
const Edit = () => {
	const blockProps = useBlockProps();
	const postId = getFromGlobal('eventDetails.postId');
	const currentUser = getFromGlobal('eventDetails.currentUser');

	return (
		<div {...blockProps}>
			<EditCover>
				<Rsvp
					postId={postId}
					currentUser={currentUser}
					type={'upcoming'}
				/>
			</EditCover>
		</div>
	);
};

export default Edit;
