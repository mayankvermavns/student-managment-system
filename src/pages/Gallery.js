import React from "react";

function Gallery() {

  return (

    <div>

      <h1>College Gallery</h1>

      <div className="gallery-grid">

        {/* IMAGE 1 */}

        <img
          src="https://images.unsplash.com/photo-1513258496099-48168024aec0?q=80&w=1200&auto=format&fit=crop"
          alt="college"
        />

        {/* IMAGE 2 */}

        <img
          src="https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1200&auto=format&fit=crop"
          alt="students"
        />

        {/* IMAGE 3 */}

        <img
          src="https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?q=80&w=1200&auto=format&fit=crop"
          alt="classroom"
        />

        {/* IMAGE 4 */}

        <img
          src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1200&auto=format&fit=crop"
          alt="campus"
        />

      </div>

    </div>

  );
}

export default Gallery;