export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      children: {
        Row: {
          birth_date: string
          first_name: string
          furigana_first_name: string
          furigana_last_name: string
          gender_id: number
          id: number
          last_name: string
          name: string
        }
        Insert: {
          birth_date: string
          first_name: string
          furigana_first_name: string
          furigana_last_name: string
          gender_id: number
          id: number
          last_name: string
          name: string
        }
        Update: {
          birth_date?: string
          first_name?: string
          furigana_first_name?: string
          furigana_last_name?: string
          gender_id?: number
          id?: number
          last_name?: string
          name?: string
        }
        Relationships: [
          {
            foreignKeyName: "children_gender_id_fkey"
            columns: ["gender_id"]
            referencedRelation: "genders"
            referencedColumns: ["id"]
          }
        ]
      }
      choice_master: {
        Row: {
          choice_text: string
          id: number
          question_master_id: number
        }
        Insert: {
          choice_text: string
          id: number
          question_master_id: number
        }
        Update: {
          choice_text?: string
          id?: number
          question_master_id?: number
        }
        Relationships: [
          {
            foreignKeyName: "choice_master_question_master_id_fkey"
            columns: ["question_master_id"]
            referencedRelation: "question_master"
            referencedColumns: ["id"]
          }
        ]
      }
      cities: {
        Row: {
          created_at: string
          id: number
          name: string
          updated_at: string
        }
        Insert: {
          created_at: string
          id: number
          name: string
          updated_at: string
        }
        Update: {
          created_at?: string
          id?: number
          name?: string
          updated_at?: string
        }
        Relationships: []
      }
      countries: {
        Row: {
          created_at: string
          id: number
          name: string
          updated_at: string
        }
        Insert: {
          created_at: string
          id: number
          name: string
          updated_at: string
        }
        Update: {
          created_at?: string
          id?: number
          name?: string
          updated_at?: string
        }
        Relationships: []
      }
      event_questions: {
        Row: {
          event_id: number
          id: number
          question_master_id: number
        }
        Insert: {
          event_id: number
          id: number
          question_master_id: number
        }
        Update: {
          event_id?: number
          id?: number
          question_master_id?: number
        }
        Relationships: [
          {
            foreignKeyName: "event_questions_event_id_fkey"
            columns: ["event_id"]
            referencedRelation: "events"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "event_questions_question_master_id_fkey"
            columns: ["question_master_id"]
            referencedRelation: "question_master"
            referencedColumns: ["id"]
          }
        ]
      }
      event_waitlists: {
        Row: {
          event_id: number
          user_id: number
        }
        Insert: {
          event_id: number
          user_id: number
        }
        Update: {
          event_id?: number
          user_id?: number
        }
        Relationships: [
          {
            foreignKeyName: "event_waitlists_event_id_fkey"
            columns: ["event_id"]
            referencedRelation: "events"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "event_waitlists_user_id_fkey"
            columns: ["user_id"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      events: {
        Row: {
          contents: string
          cost: number
          created_at: string
          end_time: string
          id: number
          location_id: number
          name: string
          payment_timing_id: number
          start_time: string
          updated_at: string
        }
        Insert: {
          contents: string
          cost: number
          created_at: string
          end_time: string
          id: number
          location_id: number
          name: string
          payment_timing_id: number
          start_time: string
          updated_at: string
        }
        Update: {
          contents?: string
          cost?: number
          created_at?: string
          end_time?: string
          id?: number
          location_id?: number
          name?: string
          payment_timing_id?: number
          start_time?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "events_location_id_fkey"
            columns: ["location_id"]
            referencedRelation: "shops"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "events_payment_timing_id_fkey"
            columns: ["payment_timing_id"]
            referencedRelation: "payment_timings"
            referencedColumns: ["id"]
          }
        ]
      }
      events_payment_methods: {
        Row: {
          event_id: number
          payment_method_id: number
        }
        Insert: {
          event_id: number
          payment_method_id: number
        }
        Update: {
          event_id?: number
          payment_method_id?: number
        }
        Relationships: [
          {
            foreignKeyName: "events_payment_methods_payment_method_id_fkey"
            columns: ["payment_method_id"]
            referencedRelation: "payment_methods"
            referencedColumns: ["id"]
          }
        ]
      }
      genders: {
        Row: {
          id: number
          name: string
        }
        Insert: {
          id: number
          name: string
        }
        Update: {
          id?: number
          name?: string
        }
        Relationships: []
      }
      meals: {
        Row: {
          allergens: string | null
          calories: number | null
          id: number
          image_url: string | null
          name: string
          shop_id: number
        }
        Insert: {
          allergens?: string | null
          calories?: number | null
          id: number
          image_url?: string | null
          name: string
          shop_id: number
        }
        Update: {
          allergens?: string | null
          calories?: number | null
          id?: number
          image_url?: string | null
          name?: string
          shop_id?: number
        }
        Relationships: [
          {
            foreignKeyName: "meals_shop_id_fkey"
            columns: ["shop_id"]
            referencedRelation: "shops"
            referencedColumns: ["id"]
          }
        ]
      }
      payment_methods: {
        Row: {
          id: number
          name: string
        }
        Insert: {
          id: number
          name: string
        }
        Update: {
          id?: number
          name?: string
        }
        Relationships: []
      }
      payment_timings: {
        Row: {
          created_at: string
          id: number
          name: string
          updated_at: string
        }
        Insert: {
          created_at: string
          id: number
          name: string
          updated_at: string
        }
        Update: {
          created_at?: string
          id?: number
          name?: string
          updated_at?: string
        }
        Relationships: []
      }
      question_master: {
        Row: {
          id: number
          is_choice: boolean
          question_text: string
        }
        Insert: {
          id: number
          is_choice: boolean
          question_text: string
        }
        Update: {
          id?: number
          is_choice?: boolean
          question_text?: string
        }
        Relationships: []
      }
      reservation_cancellations: {
        Row: {
          cancel_reason: string | null
          id: number
          reservation_id: number
          user_id: number
        }
        Insert: {
          cancel_reason?: string | null
          id: number
          reservation_id: number
          user_id: number
        }
        Update: {
          cancel_reason?: string | null
          id?: number
          reservation_id?: number
          user_id?: number
        }
        Relationships: [
          {
            foreignKeyName: "reservation_cancellations_reservation_id_fkey"
            columns: ["reservation_id"]
            referencedRelation: "reservations"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "reservation_cancellations_user_id_fkey"
            columns: ["user_id"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      reservations: {
        Row: {
          comment: string | null
          event_id: number
          id: number
          meal_id: number | null
          payment_method_id: number
          payment_status_id: number
          user_id: number
        }
        Insert: {
          comment?: string | null
          event_id: number
          id: number
          meal_id?: number | null
          payment_method_id: number
          payment_status_id: number
          user_id: number
        }
        Update: {
          comment?: string | null
          event_id?: number
          id?: number
          meal_id?: number | null
          payment_method_id?: number
          payment_status_id?: number
          user_id?: number
        }
        Relationships: [
          {
            foreignKeyName: "reservations_event_id_fkey"
            columns: ["event_id"]
            referencedRelation: "events"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "reservations_meal_id_fkey"
            columns: ["meal_id"]
            referencedRelation: "meals"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "reservations_payment_method_id_fkey"
            columns: ["payment_method_id"]
            referencedRelation: "payment_methods"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "reservations_user_id_fkey"
            columns: ["user_id"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      shops: {
        Row: {
          address: string
          capacity: number
          city_id: number
          country_id: number
          created_at: string
          description: string
          email: string
          id: number
          latitude: number
          line_id: string | null
          longitude: number
          name: string
          phone_number: string
          postal_code: string
          state_id: number
          updated_at: string
          website: string
        }
        Insert: {
          address: string
          capacity: number
          city_id: number
          country_id: number
          created_at: string
          description: string
          email: string
          id: number
          latitude: number
          line_id?: string | null
          longitude: number
          name: string
          phone_number: string
          postal_code: string
          state_id: number
          updated_at: string
          website: string
        }
        Update: {
          address?: string
          capacity?: number
          city_id?: number
          country_id?: number
          created_at?: string
          description?: string
          email?: string
          id?: number
          latitude?: number
          line_id?: string | null
          longitude?: number
          name?: string
          phone_number?: string
          postal_code?: string
          state_id?: number
          updated_at?: string
          website?: string
        }
        Relationships: [
          {
            foreignKeyName: "locations_city_id_fkey"
            columns: ["city_id"]
            referencedRelation: "cities"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "locations_country_id_fkey"
            columns: ["country_id"]
            referencedRelation: "countries"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "locations_state_id_fkey"
            columns: ["state_id"]
            referencedRelation: "states"
            referencedColumns: ["id"]
          }
        ]
      }
      states: {
        Row: {
          created_at: string
          id: number
          name: string
          updated_at: string
        }
        Insert: {
          created_at: string
          id: number
          name: string
          updated_at: string
        }
        Update: {
          created_at?: string
          id?: number
          name?: string
          updated_at?: string
        }
        Relationships: []
      }
      survey_answers: {
        Row: {
          answer_text: string
          choice_master_id: number | null
          event_question_id: number
          id: number
          user_survey_id: number
        }
        Insert: {
          answer_text: string
          choice_master_id?: number | null
          event_question_id: number
          id: number
          user_survey_id: number
        }
        Update: {
          answer_text?: string
          choice_master_id?: number | null
          event_question_id?: number
          id?: number
          user_survey_id?: number
        }
        Relationships: [
          {
            foreignKeyName: "survey_answers_choice_master_id_fkey"
            columns: ["choice_master_id"]
            referencedRelation: "choice_master"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "survey_answers_event_question_id_fkey"
            columns: ["event_question_id"]
            referencedRelation: "event_questions"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "survey_answers_user_survey_id_fkey"
            columns: ["user_survey_id"]
            referencedRelation: "user_surveys"
            referencedColumns: ["id"]
          }
        ]
      }
      survey_types: {
        Row: {
          id: number
          name: string
        }
        Insert: {
          id: number
          name: string
        }
        Update: {
          id?: number
          name?: string
        }
        Relationships: []
      }
      user_roles: {
        Row: {
          id: number
          name: string
        }
        Insert: {
          id: number
          name: string
        }
        Update: {
          id?: number
          name?: string
        }
        Relationships: []
      }
      user_statuses: {
        Row: {
          id: number
          name: string
        }
        Insert: {
          id: number
          name: string
        }
        Update: {
          id?: number
          name?: string
        }
        Relationships: []
      }
      user_surveys: {
        Row: {
          event_id: number
          id: number
          survey_type_id: number
          user_id: number
        }
        Insert: {
          event_id: number
          id: number
          survey_type_id: number
          user_id: number
        }
        Update: {
          event_id?: number
          id?: number
          survey_type_id?: number
          user_id?: number
        }
        Relationships: [
          {
            foreignKeyName: "user_surveys_event_id_fkey"
            columns: ["event_id"]
            referencedRelation: "events"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "user_surveys_survey_type_id_fkey"
            columns: ["survey_type_id"]
            referencedRelation: "survey_types"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "user_surveys_user_id_fkey"
            columns: ["user_id"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      users: {
        Row: {
          birth_date: string
          email: string
          first_name: string
          furigana_first_name: string
          furigana_last_name: string
          gender_id: number
          id: number
          last_name: string
          line_id: string | null
          name: string
          password: string
          phone_number: string
          user_role_id: number
          user_status_id: number
        }
        Insert: {
          birth_date: string
          email: string
          first_name: string
          furigana_first_name: string
          furigana_last_name: string
          gender_id: number
          id: number
          last_name: string
          line_id?: string | null
          name: string
          password: string
          phone_number: string
          user_role_id: number
          user_status_id: number
        }
        Update: {
          birth_date?: string
          email?: string
          first_name?: string
          furigana_first_name?: string
          furigana_last_name?: string
          gender_id?: number
          id?: number
          last_name?: string
          line_id?: string | null
          name?: string
          password?: string
          phone_number?: string
          user_role_id?: number
          user_status_id?: number
        }
        Relationships: [
          {
            foreignKeyName: "users_gender_id_fkey"
            columns: ["gender_id"]
            referencedRelation: "genders"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "users_user_role_id_fkey"
            columns: ["user_role_id"]
            referencedRelation: "user_roles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "users_user_status_id_fkey"
            columns: ["user_status_id"]
            referencedRelation: "user_statuses"
            referencedColumns: ["id"]
          }
        ]
      }
      users_children: {
        Row: {
          child_id: number
          parent_id: number
        }
        Insert: {
          child_id: number
          parent_id: number
        }
        Update: {
          child_id?: number
          parent_id?: number
        }
        Relationships: [
          {
            foreignKeyName: "users_children_child_id_fkey"
            columns: ["child_id"]
            referencedRelation: "children"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "users_children_parent_id_fkey"
            columns: ["parent_id"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
