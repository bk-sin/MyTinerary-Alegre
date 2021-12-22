import {connect} from "react-redux"
import {useRef, useState} from "react"
import itinerariesActions from "../../redux/actions/itinerariesActions"

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

  const editor = useRef()
  const [edit, setEdit] = useState(false)
  const [newComment, setNewComment] = useState("")
  return (
    <>
      {props.comment.userID._id === props.user && (
        <div className="buttons">
          <p
            onClick={() => {
              props.delComment(
                props.itineraryID,
                props.comment._id,
                "DEL",
                props.params
              )
            }}
          >
            X
          </p>
          <p
            onClick={() => {
              setEdit(!edit)
            }}
          >
            E
          </p>
          {edit && (
            <form onSubmit={handleSubmitE}>
              <label>
                Edit:
                <input
                  type="text"
                  name="editor"
                  ref={editor}
                  defaultValue={props.comment.comment}
                  onChange={() => setNewComment(editor.current.value)}
                />
              </label>
              <input type="submit" value="Submit" />
            </form>
          )}
        </div>
      )}
      {!edit && <h1>{props.comment.comment}</h1>}
      <h2>{props.comment.userID.name}</h2>
      <img src={props.comment.userID.photo} alt="comment" />
    </>
  )
}

const mapDispatchToProps = {
  delComment: itinerariesActions.delComment,
  modComment: itinerariesActions.modComment,
  postComment: itinerariesActions.postComment,
}

export default connect(null, mapDispatchToProps)(Comment)
