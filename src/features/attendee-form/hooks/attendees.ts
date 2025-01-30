import * as React from 'react'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { sdk } from '~/shared/graphql/client'
import { ExpoAttendeeInput } from '~/shared/graphql/sdk'

export const attendeeKeys = {
  all: () => ['attendee'],
  list: () => [...attendeeKeys.all(), 'list'],
  details: () => [...attendeeKeys.all(), 'detail'],
  detail: (id: string) => [...attendeeKeys.details(), id],
  ticket: (ticketNumber: string) => [...attendeeKeys.all(), 'ticket', ticketNumber],
}


export const useAttendee = (attendeeId: string) => {
  const queryClient = useQueryClient()


  const attendeeQuery = useQuery({
    queryKey: attendeeKeys.detail(attendeeId),
    queryFn: () => sdk().getAttendee({ id: attendeeId }),
    select: (result) => result.getAttendee,
    enabled: !!attendeeId && attendeeId !== "new",
  });


  const updateAttendee = useMutation({
    mutationKey: attendeeKeys.detail(attendeeId),
    mutationFn: async (values: ExpoAttendeeInput) => {
      await queryClient.cancelQueries({ queryKey: attendeeKeys.detail(attendeeId) })
      const previousData = queryClient.getQueryData(attendeeKeys.detail(attendeeId))

      // queryClient.setQueryData(attendeeKeys.detail(attendeeId)), {
      //   // ...previousData,
      //   movie: {
      //     ...previousData.movie,
      //     comment,
      //   },
      // })

      // return { previousData }

      // const input: CreateOrUpdateAttendeeMutationVariables = {
      //   input: {
      //     ...values,
      //     ...(attendeeData ? { id: attendeeData.id } : {}),
      //     ticketNumber,
      //     ticketId,
      //   },
      // };

      // if (!input.input.customFields) {
      //   delete input.input.customFields;
      // }

      // return sdk().createOrUpdateAttendee(input);
    },
    // onSuccess: (data) => {
    //   const client = getQueryClient();

    //   void client.invalidateQueries({
    //     queryKey: ["attendee", data.createOrUpdateAttendee.id],
    //   });

    //   void client.invalidateQueries({
    //     queryKey: ["registrations"],
    //   });

    //   toast.success("Attendee details saved");

    //   onSuccess?.(data);
    // },
    onError: (_, __, context) => {
      queryClient.setQueryData(attendeeKeys.detail(attendeeId), context.previousData)
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: attendeeKeys.detail(attendeeId) })
    },
  });

  const updateMovie = useMutation({
    mutationKey: movieKeys.detail(movieId),
    onMutate: async () => {
      await queryClient.cancelQueries({ queryKey: movieKeys.detail(movieId) })
      const previousData = queryClient.getQueryData(movieKeys.detail(movieId))

      // remove local state so that server state is taken instead
      setComment(undefined)

      queryClient.setQueryData(movieKeys.detail(movieId), {
        ...previousData,
        movie: {
          ...previousData.movie,
          comment,
        },
      })

      return { previousData }
    },
    onError: (_, __, context) => {
      queryClient.setQueryData(movieKeys.detail(movieId), context.previousData)
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: movieKeys.detail(movieId) })
    },
  })

  return {
    updateAttendee,
    attendeeQuery,
  }
}
