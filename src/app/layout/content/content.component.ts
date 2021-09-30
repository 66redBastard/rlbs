import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss'],
})
export class ContentComponent implements OnInit {
  gpInfo = [
    {
      name: 'URN',
      content: 'TST0000422',
    },
    {
      name: 'Patient',
      content: 'dasdasd sadsadsad',
    },
    {
      name: "Patient's DOB:",
      content: '11/11/90',
    },
    {
      name: 'Referral Entered the System:',
      content: '16/10/20',
    },
    {
      name: 'Practice Address:',
      content: 'test_practice',
    },
    {
      name: 'Practice Telephone:',
      content: '',
    },
    {
      name: 'Referrer:',
      content: 'sdfsdfsd sfsdffa ',
    },
    {
      name: 'Referral Reason:',
      content: 'Urgent 2WW Referral',
    },
    {
      name: 'Clinical Activity:',
      content: '',
    },
    {
      name: 'Receiver:',
      content: '',
    },
    {
      name: 'Radiographs:',
      content: 'No',
    },
    {
      name: 'Primary care choice:',
      content: 'Urgent 2WW Referral',
    },
    {
      name: 'Secondary care choice:',
      content: 'Urgent 2WW Referral',
    },
    {
      name: 'Tertiary care choice:',
      content: 'Urgent 2WW Referral',
    },
    {
      name: 'Triage Date:',
      content: 'Urgent 2WW Referral',
    },
    {
      name: 'Comments to Referrer:',
      content: 'Urgent 2WW Referral',
    },
    {
      name: 'Comments from Triager:',
      content: 'Urgent 2WW Referral',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
