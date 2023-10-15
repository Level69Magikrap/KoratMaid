package entity

import "gorm.io/gorm"

type Hour_of_work struct {
	gorm.Model
	Hour  string
	Price int

	Services []Service `gorm:"foreignKey:Hour_of_workID"`
}
