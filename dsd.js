<div class="gallery-pro col-12 col-md-7 d-none d-md-block" >

            <div class="d-xl-none d-lg-none row mt-2 position-relative">
            
              <div class="col-12">
                <div class="col-12 slide-image2 p-0">
                  <div class="owl-carousel owl-theme thumb-product3-mob">
                  <div class="item">
                    <div class="zoom-container">
                        <img
                        class="zoom-img"
                        src="{{ getImageSrc($image->path) }}"
                        title="{{ $product->name }}"
                        alt="{{ $product->name }}"
                        />
                    </div>
                </div>
                    @foreach($product->images as $image)
                    <div class="item">
                      <a>
                        <img
                          src="{{ getImageSrc($image->path) }}"
                          title="{{ $product->name }}"
                          alt="{{ $product->name }}"
                        />
                      </a>
                    </div>
                    @endforeach
                  </div>
                </div>
              </div>
            </div>
            
            <ul class="thumbnails sdfsdfdf d-none d-lg-flex">
                <div class="col-10 img-gallery-2 ml-5">
                    
              <li>
                <a
                  class="thumbnail first_thumbnail " data-fancybox="mygallery"
                  href="{{ getImageSrc($product->image, 'product') }}"
                  onclick="true;"
                >
                 <img
                    id="zoom_01"
                    src="{{ getImageSrc($product->image, 'product') }}"
                    alt="{{ $product->name }}"
                    data-zoom-image="{{ getImageSrc($product->image, 'big') }}"
                    data-loaded="true"
                    />
                </a>
              </li>
       
         
              </div>
            
              <div class="col-2 slide-image2 p-0 mt-2">
                <div class="owl-carousel2 owl-theme2 thumb-product3">
                  <div class="item">
                    <a
                      class="thumbnail"
                      data-fancybox="mygallery"
                      href="{{ getImageSrc($product->image) }}"
                    >
                      <img
                        src="{{ getImageSrc($product->image) }}"
                        alt="{{ $product->name }}"
                        data-loaded="true"
                      />
                    </a>
                  </div>
                 
                  @foreach($product->images as $image)
                  <div class="item">
                    <a
                      class="thumbnail"
                      data-fancybox="mygallery"
                      href="{{ getImageSrc($image->path) }}"
                    >
                      <img
                        src="{{ getImageSrc($image->path) }}"
                        alt="{{ $product->name }}"
                        data-loaded="true"
                      />
                    </a>
                  </div>
                  @endforeach
                </div>
              </div>
      
            </ul>

    </div>