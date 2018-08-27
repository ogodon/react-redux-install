import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

function warnBeforeLeavingFactory(WrappedComponent) {
  class WarnBeforeLeaving extends React.Component {
    componentDidUpdate() {
      this.__promptWarning(
        this.props.isUploading,
        this.props.displayAddRoomModal && this.props.isFormModified,
        this.props.displayEditRoomModal && this.props.isFormModified,
        this.props.isMoveCopyInProgress,
        this.props.isShareInProgress
      );
    }

    componentWillUnmount() {
      window.onbeforeunload = null;
    }

    __promptWarning(isUploading = false, addRoomUnsaved = false, editRoomUnsaved = false, isMoveCopyInProgress = false, isShareInProgress = false) {
      const uploadMessage = 'You have unresolved actions in progress (upload or download). Are you sure you want to leave ?';
      const addRoomMessage = 'Your unsaved changes will be lost.';
      const editRoomMessage = 'Your unsaved changes will be lost.';
      const copyMoveMessage = 'A copy/move operation will be corrupted.';
      const shareMessage = 'A share operation will be corrupted.';
      window.onbeforeunload = (isUploading && (() => uploadMessage))
        || (addRoomUnsaved && (() => addRoomMessage))
        || (editRoomUnsaved && (() => editRoomMessage))
        || (isMoveCopyInProgress && (() => copyMoveMessage))
        || (isShareInProgress && (() => shareMessage));
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  }

  WarnBeforeLeaving.propTypes = {
    isUploading: PropTypes.bool,
    displayAddRoomModal: PropTypes.bool,
    displayEditRoomModal: PropTypes.bool,
    isFormModified: PropTypes.bool,
    isMoveCopyInProgress: PropTypes.bool,
    isShareInProgress: PropTypes.bool
  };

  const mapStateToProps = state => ({
    isUploading: state.upload.isUploading,
    displayAddRoomModal: state.app.displayAddRoomModal,
    displayEditRoomModal: state.app.toggleRoomMetaEdit,
    isFormModified: !state.forms.room.$form.pristine,
    isMoveCopyInProgress: state.app.moveCopyInProgress,
    isShareInProgress: state.app.shareInProgress
  });

  return connect(
    mapStateToProps,
    null
  )(WarnBeforeLeaving);
}

export default warnBeforeLeavingFactory;
