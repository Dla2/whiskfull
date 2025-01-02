import React from 'react'
import {useForm} from 'react-hook-form'
import data from '../data.json'

const OrderForm = () => {
    const {register, handleSubmit, watch, formState:{errors}} = useForm()
    const onSubmit = data => console.log(data)
    const orderTypes = data[0]
  return (
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="flex flex-col gap-5 mb-10">
                    <label htmlFor="name">
                        <h6>Name</h6>
                    </label>
                    <input id='name' {...register('name', {required: true})} className='border-2 border-black w-full rounded-xl pl-5 py-2' type='text'
                        aria-invalid={errors.name? 'true': 'false'}
                    />
                    {
                        errors.name?.type === 'required' && (
                            <p role='alert' className='text-red-500 text-[0.75rem]'>Name is required</p>
                        )
                    }
                </div>
                <div className="flex flex-col gap-5 mb-10">
                    <label htmlFor="phoneNumber">
                        <h6>Phone Number</h6>
                    </label>
                    <input id='phoneNumber' {...register('phoneNumber', {required: true})} className='border-2 border-black w-full rounded-xl pl-5 py-2' type='tel'
                    aria-invalid={errors.phoneNumber? 'true': 'false'}/>
                    {
                        errors.phoneNumber?.type === 'required' && (
                            <p role='alert' className='text-red-500 text-[0.75rem]'>A phone number is required</p>
                        )
                    }
                </div>
                <div className="flex flex-col gap-5 mb-10">
                    <label htmlFor="orderType">
                        <h6>Order Type</h6>
                    </label>
                    {
                        errors.orderType?.type === 'required' && (
                            <p role='alert' className='text-red-500 text-[0.75rem]'>An Order type is required</p>
                        )
                    }
                    <select id="orderType" {...register('orderType', {required: true})}
                        aria-invalid={errors.orderType? 'true': 'false'} className='border-2 border-black w-full rounded-xl px-5 py-2'
                    >
                        <option value="cake">Cake</option>
                        <option value="cookie">Cookie</option>
                        <option value="brownie">Brownie</option>
                        <option value="pastry">Pastry</option>
                    </select>
                </div>
                <div className="flex flex-col gap-5 mb-10">
                    <label htmlFor="message">
                        <h6>Message</h6>
                    </label>
                    <input id='message' {...register('message')} className='border-2 border-black w-full rounded-xl pl-5 py-2 h-72'/>
                </div>
                <button type="submit" className='btn bg-secondary'>Submit</button>
            </form>
  )
}

export default OrderForm
