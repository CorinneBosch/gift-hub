export const EditForm = ({ onSubmit }) => {
  
  return (
    <form onSubmit={onSubmit}>
      <div
      className='form-group edit_pic_section'
      >
        <label htmlFor='file'>Upload picture</label>
        <input
        type='file'
        />
      </div>

      <div
      className='form-group edit_bio_section'
      >
        <label htmlFor='textarea'>Update bio</label>
        <textarea className='edit_bio_textarea' placeholder='Tell everyone how interesting you are...'/>
      </div>

      <div
      className='form-group edit_update_section'
      >
        <button className='form-control btn btn-primary' type='submit'>Update</button>
      </div>

    </form>
  )
}

export default EditForm;