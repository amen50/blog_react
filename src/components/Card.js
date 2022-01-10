import React from 'react';
import Carditem from './Carditem';
import './card.css';
import img from '../images/img-2.jpg';
import img2 from '../images/img-3.jpg';
import img3 from '../images/img-4.jpg';
import img4 from '../images/img-5.jpg';
import img8 from '../images/img-8.jpg';

function Card() {
    return (
        <div className='cards'>
        {/* <h1>Cheak out these EPIC DESTINATION!</h1> */}
        <div className='cards__container'>
            <div className='cards__wrapper'>
                <ul className='cards__items'>
                <Carditem
              src={img}
              text='Explore the hidden waterfall deep inside the Amazon Jungle'
              label='Adventure'
              path='/services'
              description='Lorem ipsum dolor sit amet consectetur adipisicing elit.
               A ullam excepturi corrupti doloremque accusantium id ratione ipsa
                veniam eum magnam soluta molestias accusamus, maiores tenetur quae 
                temporibus aperiam, sint expedita illum, libero error deserunt maxime omnis vero. 
                Quis, iste. Dignissimos quidem repellat architecto expedita atque, nam fuga nihil maxime
                 ducimus dolorem magnam in quae cum animi exercitationem et velit? Est vitae repellat, ratione, necessitatibus
                  facilis veritatis, saepe tempore accusamus magni deleniti itaque aliquid rem! Ea laborum soluta et minima animi 
                  maiores unde aliquid modi quod quasi minus quae exercitationem earum pariatur iste, quisquam dolores magnam
                   possimus sapiente excepturi nihil quibusdam, labore eius nam. Iure, repellendus! Voluptates eveniet, 
                   doloribus voluptatibus enim non rerum provident modi fuga possimus cumque quis. Ea laudantium eaque vitae, 
                   neque consequatur mollitia tempore numquam nam rerum amet porro aspernatur. Quam officiis sint atque placeat 
                   amet repudiandae corrupti totam ab vel perferendis cum dicta, sunt id autem tempore earum tenetur quas, 
                   blanditiis, dignissimos minima. Harum inventore, fuga placeat deleniti animi nulla repellat ducimus, ipsa eius 
                   mollitia magni atque sint, nesciunt deserunt iure quaerat? Doloremque earum culpa aliquid maiores. Quis odit, 
                   eius exercitationem et in praesentium obcaecati ex doloribus, nostrum dolorum totam harum, reprehenderit
                    autem nobis vitae molestias explicabo. Id cupiditate dolore soluta, reiciendis unde doloremque perspiciatis 
                    nemo sapiente laudantium ratione impedit voluptatibus delectus, eligendi corrupti exercitationem, adipisci eum
                    ! Quae aliquid hic tempora consequatur, debitis exercitationem ut natus! A, corrupti aut. Eos tempore veniam
                     sunt? Aliquam praesentium, unde illum laboriosam, facere numquam consectetur sint ducimus in neque
                      distinctio fugit accusantium nisi cumque suscipit, rem beatae aliquid quas dolorum doloribus esse
                       error ut dolores? Laboriosam neque ducimus vero nisi quos expedita error distinctio' 
    
            />
            <Carditem
              src={img2}
              text='Travel through the Islands of Bali in a Private Cruise'
              label='Luxury'
              path='/services'
              description='Lorem ipsum dolor sit amet consectetur adipisicing elit.
              A ullam excepturi corrupti doloremque accusantium id ratione ipsa
               veniam eum magnam soluta molestias accusamus, maiores tenetur quae 
               temporibus aperiam, sint expedita illum, libero error deserunt maxime omnis vero. 
               Quis, iste. Dignissimos quidem repellat architecto expedita atque, nam fuga nihil maxime
                ducimus dolorem magnam in quae cum animi exercitationem et velit? Est vitae repellat, ratione, necessitatibus
                 facilis veritatis, saepe tempore accusamus magni deleniti itaque aliquid rem! Ea laborum soluta et minima animi 
                 maiores unde aliquid modi quod quasi minus quae exercitationem earum pariatur iste, quisquam dolores magnam
                  possimus sapiente excepturi nihil quibusdam, labore eius nam. Iure, repellendus! Voluptates eveniet, 
                  doloribus voluptatibus enim non rerum provident modi fuga possimus cumque quis. Ea laudantium eaque vitae, 
                  neque consequatur mollitia tempore numquam nam rerum amet porro aspernatur. Quam officiis sint atque placeat 
                  amet repudiandae corrupti totam ab vel perferendis cum dicta, sunt id autem tempore earum tenetur quas, 
                  blanditiis, dignissimos minima. Harum inventore, fuga placeat deleniti animi nulla repellat ducimus, ipsa eius 
                  mollitia magni atque sint, nesciunt deserunt iure quaerat? Doloremque earum culpa aliquid maiores. Quis odit, 
                  eius exercitationem et in praesentium obcaecati ex doloribus, nostrum dolorum totam harum, reprehenderit
                   autem nobis vitae molestias explicabo. Id cupiditate dolore soluta, reiciendis unde doloremque perspiciatis 
                   nemo sapiente laudantium ratione impedit voluptatibus delectus, eligendi corrupti exercitationem, adipisci eum
                   ! Quae aliquid hic tempora consequatur, debitis exercitationem ut natus! A, corrupti aut. Eos tempore veniam
                    sunt? Aliquam praesentium, unde illum laboriosam, facere numquam consectetur sint ducimus in neque
                     distinctio fugit accusantium nisi cumque suscipit, rem beatae aliquid quas dolorum doloribus esse
                      error ut dolores? Laboriosam neque ducimus vero nisi quos expedita error distinctio' 
            />
          </ul>
          <ul className='cards__items'>
            <Carditem
              src={img3}
              text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
              label='Mystery'
              path='/services'
              description='Lorem ipsum dolor sit amet consectetur adipisicing elit.
              A ullam excepturi corrupti doloremque accusantium id ratione ipsa
               veniam eum magnam soluta molestias accusamus, maiores tenetur quae 
               temporibus aperiam, sint expedita illum, libero error deserunt maxime omnis vero. 
               Quis, iste. Dignissimos quidem repellat architecto expedita atque, nam fuga nihil maxime
                ducimus dolorem magnam in quae cum animi exercitationem et velit? Est vitae repellat, ratione, necessitatibus
                 facilis veritatis, saepe tempore accusamus magni deleniti itaque aliquid rem! Ea laborum soluta et minima animi 
                 maiores unde aliquid modi quod quasi minus quae exercitationem earum pariatur iste, quisquam dolores magnam
                  possimus sapiente excepturi nihil quibusdam, labore eius nam. Iure, repellendus! Voluptates eveniet, 
                  doloribus voluptatibus enim non rerum provident modi fuga possimus cumque quis. Ea laudantium eaque vitae, 
                  neque consequatur mollitia tempore numquam nam rerum amet porro aspernatur. Quam officiis sint atque placeat 
                  amet repudiandae corrupti totam ab vel perferendis cum dicta, sunt id autem tempore earum tenetur quas, 
                  blanditiis, dignissimos minima. Harum inventore, fuga placeat deleniti animi nulla repellat ducimus, ipsa eius 
                  mollitia magni atque sint, nesciunt deserunt iure quaerat? Doloremque earum culpa aliquid maiores. Quis odit, 
                  eius exercitationem et in praesentium obcaecati ex doloribus, nostrum dolorum totam harum, reprehenderit
                   autem nobis vitae molestias explicabo. Id cupiditate dolore soluta, reiciendis unde doloremque perspiciatis 
                   nemo sapiente laudantium ratione impedit voluptatibus delectus, eligendi corrupti exercitationem, adipisci eum
                   ! Quae aliquid hic tempora consequatur, debitis exercitationem ut natus! A, corrupti aut. Eos tempore veniam
                    sunt? Aliquam praesentium, unde illum laboriosam, facere numquam consectetur sint ducimus in neque
                     distinctio fugit accusantium nisi cumque suscipit, rem beatae aliquid quas dolorum doloribus esse
                      error ut dolores? Laboriosam neque ducimus vero nisi quos expedita error distinctio' 
            />
            <Carditem
              src={img4}
              text='Experience Football on Top of the Himilayan Mountains'
              label='Adventure'
              path='/products'
              description='Lorem ipsum dolor sit amet consectetur adipisicing elit.
              A ullam excepturi corrupti doloremque accusantium id ratione ipsa
               veniam eum magnam soluta molestias accusamus, maiores tenetur quae 
               temporibus aperiam, sint expedita illum, libero error deserunt maxime omnis vero. 
               Quis, iste. Dignissimos quidem repellat architecto expedita atque, nam fuga nihil maxime
                ducimus dolorem magnam in quae cum animi exercitationem et velit? Est vitae repellat, ratione, necessitatibus
                 facilis veritatis, saepe tempore accusamus magni deleniti itaque aliquid rem! Ea laborum soluta et minima animi 
                 maiores unde aliquid modi quod quasi minus quae exercitationem earum pariatur iste, quisquam dolores magnam
                  possimus sapiente excepturi nihil quibusdam, labore eius nam. Iure, repellendus! Voluptates eveniet, 
                  doloribus voluptatibus enim non rerum provident modi fuga possimus cumque quis. Ea laudantium eaque vitae, 
                  neque consequatur mollitia tempore numquam nam rerum amet porro aspernatur. Quam officiis sint atque placeat 
                  amet repudiandae corrupti totam ab vel perferendis cum dicta, sunt id autem tempore earum tenetur quas, 
                  blanditiis, dignissimos minima. Harum inventore, fuga placeat deleniti animi nulla repellat ducimus, ipsa eius 
                  mollitia magni atque sint, nesciunt deserunt iure quaerat? Doloremque earum culpa aliquid maiores. Quis odit, 
                  eius exercitationem et in praesentium obcaecati ex doloribus, nostrum dolorum totam harum, reprehenderit
                   autem nobis vitae molestias explicabo. Id cupiditate dolore soluta, reiciendis unde doloremque perspiciatis 
                   nemo sapiente laudantium ratione impedit voluptatibus delectus, eligendi corrupti exercitationem, adipisci eum
                   ! Quae aliquid hic tempora consequatur, debitis exercitationem ut natus! A, corrupti aut. Eos tempore veniam
                    sunt? Aliquam praesentium, unde illum laboriosam, facere numquam consectetur sint ducimus in neque
                     distinctio fugit accusantium nisi cumque suscipit, rem beatae aliquid quas dolorum doloribus esse
                      error ut dolores? Laboriosam neque ducimus vero nisi quos expedita error distinctio' 
            />
            <Carditem
              src={img8}
              text='Ride through the Sahara Desert on a guided camel tour'
              label='Adrenaline'
              path='/sign-up'
              description='Lorem ipsum dolor sit amet consectetur adipisicing elit.
              A ullam excepturi corrupti doloremque accusantium id ratione ipsa
               veniam eum magnam soluta molestias accusamus, maiores tenetur quae 
               temporibus aperiam, sint expedita illum, libero error deserunt maxime omnis vero. 
               Quis, iste. Dignissimos quidem repellat architecto expedita atque, nam fuga nihil maxime
                ducimus dolorem magnam in quae cum animi exercitationem et velit? Est vitae repellat, ratione, necessitatibus
                 facilis veritatis, saepe tempore accusamus magni deleniti itaque aliquid rem! Ea laborum soluta et minima animi 
                 maiores unde aliquid modi quod quasi minus quae exercitationem earum pariatur iste, quisquam dolores magnam
                  possimus sapiente excepturi nihil quibusdam, labore eius nam. Iure, repellendus! Voluptates eveniet, 
                  doloribus voluptatibus enim non rerum provident modi fuga possimus cumque quis. Ea laudantium eaque vitae, 
                  neque consequatur mollitia tempore numquam nam rerum amet porro aspernatur. Quam officiis sint atque placeat 
                  amet repudiandae corrupti totam ab vel perferendis cum dicta, sunt id autem tempore earum tenetur quas, 
                  blanditiis, dignissimos minima. Harum inventore, fuga placeat deleniti animi nulla repellat ducimus, ipsa eius 
                  mollitia magni atque sint, nesciunt deserunt iure quaerat? Doloremque earum culpa aliquid maiores. Quis odit, 
                  eius exercitationem et in praesentium obcaecati ex doloribus, nostrum dolorum totam harum, reprehenderit
                   autem nobis vitae molestias explicabo. Id cupiditate dolore soluta, reiciendis unde doloremque perspiciatis 
                   nemo sapiente laudantium ratione impedit voluptatibus delectus, eligendi corrupti exercitationem, adipisci eum
                   ! Quae aliquid hic tempora consequatur, debitis exercitationem ut natus! A, corrupti aut. Eos tempore veniam
                    sunt? Aliquam praesentium, unde illum laboriosam, facere numquam consectetur sint ducimus in neque
                     distinctio fugit accusantium nisi cumque suscipit, rem beatae aliquid quas dolorum doloribus esse
                      error ut dolores? Laboriosam neque ducimus vero nisi quos expedita error distinctio' 
            />

            </ul>
            </div>
        </div>
                     
        </div>
    )
}

export default Card;
