import {connect} from "react-redux"
import {Button} from "react-bootstrap"
import {useRef, useState} from "react"
import itinerariesActions from "../../redux/actions/itinerariesActions"
import {FaTrashAlt, FaEdit} from "react-icons/fa"
import swal from "sweetalert"

function Comment(props) {
  function handleSubmitE(e) {
    e.preventDefault()
    setEdit(!edit)
    props.modComment(
      props.itineraryID,
      props.comment._id,
      newComment,
      "MOD",
      props.params
    )
  }
  function deleteComment() {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this imaginary file!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        props.delComment(
          props.itineraryID,
          props.comment._id,
          "DEL",
          props.params
        )
        swal("Poof! Your imaginary file has been deleted!", {
          icon: "success",
        })
      } else {
        swal("Your imaginary file is safe!")
      }
    })
  }

  const editor = useRef()
  const [edit, setEdit] = useState(false)
  const [newComment, setNewComment] = useState("")

  return (
    <div className="comment" key={props.index}>
      {props.comment.userID && props.comment.userID._id === props.user && (
        <div className="buttons">
          <Button
            variant="danger"
            onClick={() => {
              deleteComment()
            }}
          >
            <FaTrashAlt />
          </Button>
          <Button
            variant="warning"
            onClick={() => {
              setEdit(!edit)
            }}
          >
            <FaEdit />
          </Button>
        </div>
      )}
      {!edit ? (
        <div className="message">
          <p className="pmessage">{props.comment.comment}</p>
        </div>
      ) : (
        <form onSubmit={handleSubmitE} className="message">
          <label className="labeltext">Edit:</label>
          <textarea
            className="message texa inputtext"
            rows="4"
            name="editor"
            ref={editor}
            defaultValue={props.comment.comment}
            onChange={() => setNewComment(editor.current.value)}
          />

          <input type="submit" value="Submit" className="btn-submit" />
        </form>
      )}
      {props.comment.userID && (
        <div className="userInfo">
          <p>{props.comment.userID.name}</p>
          <img src={props.comment.userID.photo} alt="comment" />
        </div>
      )}
    </div>
  )
}

const mapDispatchToProps = {
  delComment: itinerariesActions.delComment,
  modComment: itinerariesActions.modComment,
}

export default connect(null, mapDispatchToProps)(Comment)
