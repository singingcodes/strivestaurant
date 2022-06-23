import { FormEvent, useState } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

interface ReservationFormProps {
  name: string,
    phone: string,
    numberOfPeople: number,
    smoking: boolean,
    dateTime: string,
    specialRequests: string,
}


const ReservationForm = () => {
  const [reservation, setReservation] = useState<ReservationFormProps>({
    name: '',
    phone: '',
    numberOfPeople: 1,
    smoking: false,
    dateTime: '',
    specialRequests: '',

  })

  // const handleInput = (fieldName, value) => {
  //   setReservation({
  //     ...reservation,
  //     [fieldName]: value,
  //   })
  // }

  const handleSubmit = async (e:FormEvent ) => {
    e.preventDefault()
    console.log(reservation)
    try {
      let response = await fetch(
        'https://striveschool-api.herokuapp.com/api/reservation',
        {
          method: 'POST',
          body: JSON.stringify(reservation),
          headers: {
            'Content-type': 'application/json',
          },
        }
      )

      if (response.ok) {
        alert('OK!')
        setReservation({
          name: '',
          phone: '',
          numberOfPeople: 1,
          smoking: false,
          dateTime: '',
          specialRequests: '',
        })
      } else {
        alert('ERROR')
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <h2>Book your table NOW!</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>Your name</Form.Label>
          <Form.Control
            type='text'
            placeholder='Input your name'
            value={reservation?.name}
            onChange={(e) => {
              setReservation({
                ...reservation,
                name: e.target.value,
              })
              
            }}
            required
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Your phone</Form.Label>
          <Form.Control
            type='tel'
            placeholder='Input your cellphone'
            value={reservation?.phone}
            onChange={(e) => {
              setReservation({
                ...reservation,
                phone: e.target.value,
              })
              
            }}
            required
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>How many people?</Form.Label>
          <Form.Control
            as='select'
            value={reservation?.numberOfPeople}
            onChange={(e) => {
              setReservation({
                ...reservation,
                numberOfPeople: Number(e.target.value),
              })
              
            }}
            required
          >
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
            <option>6</option>
          </Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Check
            type='checkbox'
            label='Do you smoke?'
            checked={reservation?.smoking}
            onChange={(e) => {
              setReservation({
                ...reservation,
                smoking: e.target.checked,
              })
            }}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Date?</Form.Label>
          <Form.Control
            type='datetime-local'
            value={reservation?.dateTime}
            onChange={(e) => {
              setReservation({
                ...reservation,
                dateTime: e.target.value,
              })
              
            }}
            required
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Any special request?</Form.Label>
          <Form.Control
            as='textarea'
            rows={5}
            value={reservation?.specialRequests}
            onChange={(e) => {
              setReservation({
                ...reservation,
                specialRequests: e.target.value,
              })
              
            }}
          />
        </Form.Group>
        <Button variant='primary' type='submit'>
          Submit
        </Button>
      </Form>
    </>
  )
}

export default ReservationForm
