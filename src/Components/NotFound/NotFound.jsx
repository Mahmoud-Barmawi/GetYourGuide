import React from 'react'
import style from './notfound.module.css'
export default function NotFound() {
    return (
        <div>
            <main>
                <div>
                    <div className={`${style.loading} ${style.wave}`}>
                        404
                    </div>
                    <div  className={`${style.not_found} ${style.wave}`} >
                        Page Not Found
                    </div>
                </div>



            </main>
        </div>

    )
}

