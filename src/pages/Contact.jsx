function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Cảm ơn bạn! Chúng tôi sẽ liên hệ sớm.')
  }

  return (
    <section className="section">
      <h2>Liên hệ</h2>
      <form className="contact-form" onSubmit={handleSubmit}>
        <input type="text" placeholder="Họ và tên" required />
        <input type="email" placeholder="Email" required />
        <textarea rows="5" placeholder="Nội dung" required />
        <button type="submit" className="btn">Gửi</button>
      </form>
    </section>
  )
}

export default Contact