import './Footer1.css'

export const Footer1 = () => {
  return (
    <div className='su'>
    <div className="main-footer ">
        <div className="container-footer">
            <div className="row text-center">
                {/* Colum 1 */}
                <div className="col-md-4 col-sm-4 mt-4">
                    <h5>LOCATION</h5>
                    <p>C/ Calle del Almirante Cadarso 26,</p>
                    <p> 46005, Valencia</p> 
                </div>
                {/* Colum 2 */}
                <div className="col-md-4 col-sm-4 mt-4">
                    <h5>TIMETABLE</h5>
                    <p>Monday to Friday: 10:00 – 20:00</p>
                    <p>Saturday and Sunday: Close</p>
                </div>
                {/* Colum 3 */}
                <div className="col-md-4 col-sm-4 mt-4">
                    <h5>FOLLOW US!</h5>
                    <div className='icons'>
                        <i className="bi bi-facebook"></i>
                        <i className="bi bi-instagram"></i>
                    </div>
                </div>
            </div>
            {/* Footer Bottom */}
            <div className="footer-bottom text-center">
                <p className="text-xs-center mb-0">
                    &copy;{new Date().getFullYear()} City Guide App - All Rights Reserved
                </p>
            </div>
        </div>
    </div>
    </div>
  )
}
