import React from 'react'
import { Accordion } from 'flowbite-react';

const Help = () => {
  return (
    <div className='mt-20 ' >
      <div className=' flex justify-center flex-col items-center' >
        <div className=' xl:w-[700px] lg:w-[700px] px-4' >
          <h1 className=' xl:text-[3rem] text-q font-bold lg:text-[3rem] text-[2rem] leading-tight' >Find the answer To all of our most frequently asked questions</h1>
        </div>
        <div className=' to-blue-500 w-full px-2 lg:w-[700px] xl:w-[700px] mt-8' >
          <Accordion>
            <Accordion.Panel>
              <Accordion.Title className=' font-serif text-q text-lg' >How to buy ?</Accordion.Title>
              <Accordion.Content>
                <p className="mb-2 text-q font-medium text-gray-500 dark:text-gray-400">
                  Shopping on STM shoping mm is easy!
                  <br></br>
                  Once you have found the product you want to buy, just follow the steps below:
                  <br></br>
                  Login to your account.
                  <br></br>
                  Make sure you choose your product variations (i.e. sizes and colors for clothes)
                  <br></br>
                  For multiple items order, click on "Add To Cart" on your products, then, check out from your top right cart icon.
                  <br></br>
                  For single item order, click on "Buy Now",
                  <br></br>
                  Click "Place Order" on the left side of the web page.
                  <br></br>
                  Click on your preferred payment option, and click on "Pay Now".
                  <br></br>
                  If you see the "Thank you for your purchase" page.
                  <br></br>
                  Congratulations, your order has been placed!
                </p>
                {/* <p className="text-gray-500 dark:text-gray-400">
                  Check out this guide to learn how to&nbsp;
                  <a
                    href="https://flowbite.com/docs/getting-started/introduction/"
                    className="text-cyan-600 hover:underline dark:text-cyan-500"
                  >
                    get started&nbsp;
                  </a>
                  and start developing websites even faster with components on top of Tailwind CSS.
                </p> */}
              </Accordion.Content>
            </Accordion.Panel>
            <Accordion.Panel>
              <Accordion.Title>What refund options are available?</Accordion.Title>
              <Accordion.Content>
                <p className="mb-2 text-gray-500 dark:text-gray-400">
                  The refund method is chosen by you when you fill in the Return Form. The shipping fee is refunded along with the amount paid for your returned product.
                </p>
                {/* <p className="text-gray-500 dark:text-gray-400">
                  Check out the
                  <a href="https://flowbite.com/figma/" className="text-cyan-600 hover:underline dark:text-cyan-500">
                    Figma design system
                  </a>
                  based on the utility classes from Tailwind CSS and components from Flowbite.
                </p> */}
              </Accordion.Content>
            </Accordion.Panel>
            <Accordion.Panel>
              <Accordion.Title>How can I sell on Shop?</Accordion.Title>
              <Accordion.Content>
                <p className="mb-2 text-gray-500 dark:text-gray-400">
                  Please find below the steps to sign up and sell on Shop.
                  <br />
                  Step 1: Click on this link and go to the initial registration form to send your request to sell on Shop.
                  <br />
                  Step 2: Provide your profile information which includes address book details, ID and bank information.
                  <br />
                  Step 3: Seller Support team will review and verify the information you have submitted. Meanwhile, you can start listing your products on Seller Center. If there is anything we need to check, we will call you within 1 business day. Note: the products you list will not be visible on the website till your store goes live.
                  <br />
                  Step 4: Please wait for the call from our support officer for the first packaging material.
                  <br />
                  Step 5: As soon as you receive the packaging, we will take your store live and you will be able to sell!
                  <br />
                  Make sure you're ready with the following:
                  <br />
                  ● Business email address & phone number.
                  <br />
                  ● ID Info (National ID for individual sellers, Business Registration document for corporate sellers, Brand
                    <br />
                  ● authorization document for DMall sellers).
                  <br />
                  ● A bank cheque copy with same title as ID information as Daraz will be sending payments from your sales to this bank account.
                  <br />
                  For more details on the process, visit our Help Center
                </p>
                {/* <p className="mb-2 text-gray-500 dark:text-gray-400">
                  However, we actually recommend using both Flowbite, Flowbite Pro, and even Tailwind UI as there is no
                  technical reason stopping you from using the best of two worlds.
                </p> */}
                <p className="mb-2 text-gray-500 dark:text-gray-400">Learn more about these technologies:</p>
                {/* <ul className="list-disc pl-5 text-gray-500 dark:text-gray-400">
                  <li>
                    <a href="https://flowbite.com/pro/" className="text-cyan-600 hover:underline dark:text-cyan-500">
                      Flowbite Pro
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://tailwindui.com/"
                      rel="nofollow"
                      className="text-cyan-600 hover:underline dark:text-cyan-500"
                    >
                      Tailwind UI
                    </a>
                  </li>
                </ul> */}
              </Accordion.Content>
            </Accordion.Panel>
          </Accordion>
        </div>
      </div>
      <div className=' h-[30vh]' ></div>
    </div>
  )
}

export default Help
