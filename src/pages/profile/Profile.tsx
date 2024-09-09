import { DevTool } from "@hookform/devtools";
import { useFieldArray, useForm } from "react-hook-form";
import styles from './Profile.module.scss';

type formValues = {
    name: string
    email: string
    password: string
    phNumners: {
        number: string;
    }[]
};

const Profile = () => {

    const form = useForm<formValues>({
        defaultValues: {
            name: "",
            email: "",
            password: "",
            phNumners: [{ number: "1234567890" }]
        },
    });



    const { register, control, handleSubmit } = form;
    const { errors } = form.formState;

    const onSubmitForm = (data: formValues) => {
        console.log("data:: ", data);
    }

    const { fields, append, remove } = useFieldArray({
        name: 'phNumners',
        control

    })

    return (
        <div className={styles.formContainer}>
            <form onSubmit={handleSubmit(onSubmitForm)} noValidate>
                <label htmlFor="name" className={styles.formLabel}>Name</label>
                <input type="text" id="name" className={styles.formInput} {...register('name', { required: 'username is required' })} />
                <p>{errors.name?.message}</p>

                <label htmlFor="email" className={styles.formLabel}>Email</label>
                <input
                    type="email"
                    id="email"
                    className={styles.formInput}
                    {...register('email', {
                        required: 'Email is required',
                        pattern: {
                            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/i,
                            message: 'Invalid email address'
                        },
                        validate: {
                            notAdmin: (value) => value !== 'admin@example.com' || 'Enter another email address',
                            notBlackListed: (value) => !value.endsWith('test.com') || 'This domain is not supported'
                        }
                    })}
                />
                <p>{errors.email?.message}</p>

                <label htmlFor="password" className={styles.formLabel}>Password</label>
                <input type="password" id="password" className={styles.formInput} {...register('password')} />
                <p>{errors.password?.message}</p>

                <div>
                    <label htmlFor="phNumners" className={styles.formLabel}>Phone Numbers</label>
                    <div>
                        {fields.map((field, index) => {
                            return (
                                <div key={field.id}>
                                    <input type="text" className={styles.formInput} {...register(`phNumners.${index}.number` as const)} />
                                </div>
                            )
                        })}
                        <button className={styles.submitButton} type="button" onClick={() => append({ number: '' })}>Add number</button>
                        <br />
                        <button className={styles.submitButton} type="button" onClick={() => remove(0)}>Remove number</button>
                    </div>
                </div>


                <button type="submit" className={styles.submitButton}>Submit</button>
            </form>
            <DevTool control={control} />
        </div>
    )
}

export default Profile;
